// Radio service worker

const CACHE = "radio-cache-v1";
const offlinePage = "offline.html";
const cacheWhitelist = [CACHE];

// Install stage: set up and open a new cache
self.addEventListener("install", function (event) {
  console.log("Install Event ...");
var cacheWhitelist = [CACHE];

  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.add(offlinePage);
      console.log("Cache installed");
    })
  );
});


self.addEventListener('activate', function(event) {
  // Deletes all caches not included in whitelist - 
  // ie, change in version number etc.
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log("Deleteing cache: ", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


// If any fetch fails, it will show the c
self.addEventListener("fetch", function (event) {

//   if (event.request.destination === "audio") {
//     console.log('audio');
//     return;
//   };  
  
  if (event.request.method !== "GET") return;
  
  event.respondWith(
    fetch(event.request).catch(function (error) {
      // validate request is for in-scope navigation
      if (
        event.request.destination !== "document" ||
        event.request.mode !== "navigate"
      ) {
        return;
      }
      
      console.error("Network request Failed. Serving offline page " + error);
      // load offline page
      return caches.open(CACHE).then(function (cache) {
        return cache.match(offlinePage);
      });
    })
  );
});


// This is an event that can be fired from your page to tell the SW to update the offline page
self.addEventListener("refreshOffline", function () {
  const offlinePageRequest = new Request(offlinePage);

  return fetch(offlinePage).then(function (response) {
    return caches.open(CACHE).then(function (cache) {
      console.log("Offline page updated from refreshOffline event: " + response.url);
      return cache.put(offlinePageRequest, response);
    });
  });
});
