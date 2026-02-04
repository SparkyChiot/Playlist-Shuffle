const CACHE_NAME = "study-player-v1";

const ASSETS = [
  "/",               // root
  "/index.html",
  "/styles.css",
  "/script.js",
  "/manifest.json",
  // Add your MP3s here if you want them cached automatically
    "songs/Dirty Paws - Of Monsters And Men.mp3",
    "songs/Come Along - Cosmo Sheldrake.mp3",
    "songs/Hammer And The Anvil - The Longest Johns.mp3",
    "songs/Little Dark Age - MGMT (Bardcore Version).mp3",
    "songs/Pierre - Ryn Weaver.mp3",
    "songs/Soldier, Poet, King - The Oh Hellos.mp3",
    "songs/Song of the Vikings (My Mother Told Me) - Perly I Lotry.mp3",
    "songs/Tardigrade Song - Cosmo Sheldrake.mp3",
    "songs/The Curse - Agnes Obel.mp3",
    "songs/The Moon Will Sing - The Crane Wives.mp3",
    "songs/The Moss - Cosmo Sheldrake.mp3",
    "songs/The Wolf - Phildel.mp3",
    "songs/Toss A Coin To Your Witcher - Joey Batey.mp3",
    "songs/Werewolf - Fiona Apple.mp3",
    "songs/Witches - Alice Phoebe Lou.mp3"
    "vgSongs/Hollow Knight OST - Enter Hallownest.mp3",
    "fcSongs/Pink Martini - Sympathique [HD].mp3",
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
