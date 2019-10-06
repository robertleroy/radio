
const staticCacheName = "static-cache-v1";
const dynamicCacheName = "dynamic-cache-v1";
const assets = [
	'/',
	'/index.html',
	'/index.js',
	'/style.css',
	'/favicon.ico',
	'https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
	'/fallback.html'

];


const limitCacheSize = (name, size) => {
	caches.open(name).then(cache => {
		cache.keys().then(keys => {
			if (keys.length > size) {
				cache.delete(keys[0]).then(limitCacheSize(name,size));
			}
		})
	})
};

self.addEventListener("install", event => {
	event.waitUntil( 
		caches.open(staticCacheName).then(cache => {
			cache.addAll(assets);
		})
	);
});


self.addEventListener("activate", event => {
	event.waitUntil(
		caches.keys().then( keys => {
			return Promise.all( keys 
				.filter( key => key !== staticCacheName && key !== dynamicCacheName )
				.map( key => caches.delete(key) )
			)
		})
	)
});



self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request).then(cacheRes => {
			return cacheRes || fetch(event.request).then(fetchRes => {
				return caches.open(dynamicCacheName).then(cache => {
					cache.put(event.request.url, fetchRes.clone());
					limitCacheSize(dynamicCacheName, 15);
					return fetchRes;
				})
			});
		}).catch(() => {
			if (event.request.url.indexOf(".html") > -1 ) {
				return caches.match("/fallback.html");
			}
		})
	);
});



