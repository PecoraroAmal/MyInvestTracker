const CACHE_NAME = 'myinvesttracker-cache-v1.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/home.js',
  '/style.css',
  '/Tracker/tracker.html',
  '/Tracker/tracker.js',
  '/Tracker/tracker.css',
  '/PAC/pac.html',
  '/PAC/pac.js',
  '/PAC/pac.css',
  '/Variazione/variazione.html',
  '/Variazione/variazione.js',
  '/Variazione/variazione.css',
  '/Editor/editor.html',
  '/Editor/editor.js',
  '/Editor/editor.css',
  '/Calcolatrice/calcolatrice.html',
  '/Calcolatrice/calcolatrice.js',
  '/Calcolatrice/calcolatrice.css',
  '/assets/favicon-96x96.png',
  '/assets/favicon.svg',
  '/assets/favicon.ico',
  '/assets/apple-touch-icon.png',
  '/assets/site.webmanifest',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/webfonts/fa-solid-900.woff2',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/webfonts/fa-brands-400.woff2'
];

// Install event: Cache resources and skip waiting
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .catch(error => console.error('Service Worker: Cache failed:', error))
  );
  self.skipWaiting();
});

// Activate event: Clean up old caches and claim clients
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event: Serve from cache or fetch from network if online
self.addEventListener('fetch', event => {
  console.log('Service Worker: Fetching', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // If resource is in cache, return it immediately
        if (cachedResponse) {
          // If online, try to fetch a fresh version in the background
          if (navigator.onLine) {
            fetchAndUpdateCache(event.request);
          }
          return cachedResponse;
        }
        // If not in cache and online, fetch from network and cache
        if (navigator.onLine) {
          return fetchAndUpdateCache(event.request);
        }
        // If offline and not in cache, return fallback
        return caches.match('/index.html');
      })
      .catch(error => {
        console.error('Fetch failed:', error);
        return caches.match('/index.html');
      })
  );
});

// Function to fetch from network and update cache
async function fetchAndUpdateCache(request) {
  try {
    const networkResponse = await fetch(request);
    // Only cache valid responses (status 200) for GET requests
    if (networkResponse.ok && request.method === 'GET') {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, networkResponse.clone());
      console.log('Service Worker: Updated cache for', request.url);
    }
    return networkResponse;
  } catch (error) {
    console.error('Network fetch failed:', error);
    throw error;
  }
}

self.addEventListener('controllerchange', () => {
  console.log('Service Worker: New controller activated');
});