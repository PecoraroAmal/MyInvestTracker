const CACHE_NAME = 'myinvesttracker-cache-v1';
const urlsToCache = [
  '/MyInvestTracker/',
  '/MyInvestTracker/index.html?v=1.0',
  '/MyInvestTracker/home.js?v=1.0',
  '/MyInvestTracker/style.css?v=1.0',
  '/MyInvestTracker/sw.js?v=1.0',
  '/MyInvestTracker/Tracker/tracker.html?v=1.0',
  '/MyInvestTracker/Tracker/tracker.js?v=1.0',
  '/MyInvestTracker/Tracker/tracker.css?v=1.0',
  '/MyInvestTracker/PAC/pac.html?v=1.0',
  '/MyInvestTracker/PAC/pac.js?v=1.0',
  '/MyInvestTracker/PAC/pac.css?v=1.0',
  '/MyInvestTracker/Variazione/variazione.html?v=1.0',
  '/MyInvestTracker/Variazione/variazione.js?v=1.0',
  '/MyInvestTracker/Variazione/variazione.css?v=1.0',
  '/MyInvestTracker/Editor/editor.html?v=1.0',
  '/MyInvestTracker/Editor/editor.js?v=1.0',
  '/MyInvestTracker/Editor/editor.css?v=1.0',
  '/MyInvestTracker/Calcolatrice/calcolatrice.html?v=1.0',
  '/MyInvestTracker/Calcolatrice/calcolatrice.js?v=1.0',
  '/MyInvestTracker/Calcolatrice/calcolatrice.css?v=1.0',
  '/MyInvestTracker/assets/favicon-96x96.png',
  '/MyInvestTracker/assets/favicon.svg',
  '/MyInvestTracker/assets/favicon.ico',
  '/MyInvestTracker/assets/apple-touch-icon.png',
  '/MyInvestTracker/assets/web-app-manifest-192x192.png',
  '/MyInvestTracker/assets/web-app-manifest-512x512.png',
  '/MyInvestTracker/manifest.json',
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
        return caches.match('/MyInvestTracker/index.html');
      })
      .catch(error => {
        console.error('Fetch failed:', error);
        return caches.match('/MyInvestTracker/index.html');
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