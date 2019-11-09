// Radio service worker

const Current_Cache = "radio-cache-v0.2";
const offlinePage = "offline.html";
const cacheWhitelist = [Current_Cache];

self.addEventListener('install', (event) => {
  console.log("Install Event :: ");
  event.waitUntil(
    caches.open(Current_Cache).then((cache) => {
      return cache.addAll([
        cacheWhitelist
      ]);
      console.log("Installed cache: ", Current_Cache.toString);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log("Activate Event :: ");

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
          if (cacheWhitelist.indexOf(key) === -1) {
            return caches.delete(key);
            console.log("Deleted cache: ", key);
          }
        })
      );
    })
  );
});



// If any fetch fails, it will show the c
self.addEventListener("fetch", function (event) {
  console.log("Fetch Event :: ");

  if (event.request.destination === "audio") {
    console.log('audio intercept...');
    return;
  };  
  
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
      return caches.open(Current_Cache).then(function (cache) {
        return cache.match(offlinePage);
      });
    })
  );
});

// This is an event that can be fired from your page to tell the SW to update the offline page
self.addEventListener("refreshOffline", function () {
  console.log("RefreshOffline Event :: ");

  const offlinePageRequest = new Request(offlinePage);

  return fetch(offlinePage).then(function (response) {
    return caches.open(Current_Cache).then(function (cache) {
      console.log("Offline page updated from refreshOffline event: " + response.url);
      return cache.put(offlinePageRequest, response);
    });
  });
});
