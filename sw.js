const CACHE_NAME = "mapa-zonas-v1";
const urlsToCache = [
  "/index.html",
  "/style.css",
  "/script.js",
  "/manifest.json",
  "/icon-192x192.png",
  "/icon-512x512.png"
];

// Instalar el service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Archivos en caché");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activar el service worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Borrando caché antiguo");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar solicitudes
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
