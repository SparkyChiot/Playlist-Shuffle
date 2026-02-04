const CACHE_NAME = "study-player-v1";

const ASSETS = [
  "/",               // root
  "/index.html",
  "/styles.css",
  "/script.js",
  "/manifest.json",
  // Add your MP3s here if you want them cached automatically
    "Playlist-Shuffle/songs/Dirty Paws - Of Monsters And Men.mp3",
    "Playlist-Shuffle/songs/Come Along - Cosmo Sheldrake.mp3",
    "Playlist-Shuffle/songs/Hammer And The Anvil - The Longest Johns.mp3",
    "Playlist-Shuffle/songs/Little Dark Age - MGMT (Bardcore Version).mp3",
    "Playlist-Shuffle/songs/Pierre - Ryn Weaver.mp3",
    "Playlist-Shuffle/songs/Soldier, Poet, King - The Oh Hellos.mp3",
    "Playlist-Shuffle/songs/Song of the Vikings (My Mother Told Me) - Perly I Lotry.mp3",
    "Playlist-Shuffle/songs/Tardigrade Song - Cosmo Sheldrake.mp3",
    "Playlist-Shuffle/songs/The Curse - Agnes Obel.mp3",
    "Playlist-Shuffle/songs/The Moon Will Sing - The Crane Wives.mp3",
    "Playlist-Shuffle/songs/The Moss - Cosmo Sheldrake.mp3",
    "Playlist-Shuffle/songs/The Wolf - Phildel.mp3",
    "Playlist-Shuffle/songs/Toss A Coin To Your Witcher - Joey Batey.mp3",
    "Playlist-Shuffle/songs/Werewolf - Fiona Apple.mp3",
    "Playlist-Shuffle/songs/Witches - Alice Phoebe Lou.mp3"
    "Playlist-Shuffle/vgSongs/Hollow Knight OST - Enter Hallownest.mp3",
    "Playlist-Shuffle/fcSongs/Pink Martini - Sympathique [HD].mp3",
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
