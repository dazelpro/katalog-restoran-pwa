self.addEventListener('install', (event) => {
    console.log('Installing Service Worker ...');
});
   
self.addEventListener('activate', (event) => {
    console.log('Activating Service Worker ...');
});
   
self.addEventListener('fetch', (event) => {
    console.log(event.request);
    event.respondWith(fetch(event.request));
});