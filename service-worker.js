const CACHE_NAME = "study-player-v1";

const ASSETS = [
  "/",               // root
  "/index.html",
  "/styles.css",
  "/script.js",
  "/manifest.json"
  // Add your MP3s here if you want them cached automatically
];

// Install event: cache everything
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Fetch event: serve from cache first
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});
