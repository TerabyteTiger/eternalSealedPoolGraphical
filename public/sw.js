self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open("eternalSealedAnalysis").then(function(cache) {
            return cache.addAll([
                "/",
                "/index.html",
                "/index.js",
                "/index.css",
                "/Chart.js",
                "/help.html",
                "/about.html",
                "./fontawesome-free-5.4.1-web/svgs/solid/chevron-circle-up.svg",
                "./functions.js",
                "./auth.js"
            ]);
        })
    );
});

self.addEventListener("fetch", function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
