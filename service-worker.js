const CACHE_NAME = 'akko-portfolio-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    'https://raw.githubusercontent.com/wnffldktm/wnffldktm.github.io/58f808b2ab7dea856d2985411dd540a3a492221c/Hanroro.png',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://sun.fo/suite/font.css'
];

// Install service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
});

// Cache-first strategy
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
});

// Clean up old caches - FIXED SYNTAX
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames.map(cacheName =>
                    cacheWhitelist.includes(cacheName)
                        ? null
                        : caches.delete(cacheName)
                )
            )
        );
});