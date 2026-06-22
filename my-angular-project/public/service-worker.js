const CACHE_NAME = 'my-angular-pwa-cache-v1';
const DYNAMIC_CACHE_NAME = 'dynamic-cache-v1';
const STATIC_FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/caricon192px.png',
  './icons/caricon512px.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_FILES.map(url => new Request(url, { cache: 'reload' })));
    }).catch((error) => {
      console.error('Failed to cache static files during install:', error);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME && cache !== DYNAMIC_CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.url.startsWith('chrome-extension://')) {
    return;
  }
  
  if (request.url.includes('/bilar')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          return caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            } else {
              return new Response(JSON.stringify({ error: 'Offline & no cached API response' }), {
                headers: { 'Content-Type': 'application/json' }
              });
            }
          });
        })
    );
    return;
  }

  // requests (e.g., main.js, styles.css, runtime.js, polyfills.js)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      return cachedResponse || fetch(request)
        .then((networkResponse) => {
          return caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          // Fallback
          if (request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
    })
  );
});