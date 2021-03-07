if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        r[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const r = document.createElement('script');
              (r.src = e), document.head.appendChild(r), (r.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
          return r[e];
        })
      );
    },
    s = (s, r) => {
      Promise.all(s.map(e)).then((e) => r(1 === e.length ? e[0] : e));
    },
    r = { require: Promise.resolve(s) };
  self.define = (s, i, n) => {
    r[s] ||
      (r[s] = Promise.resolve().then(() => {
        let r = {};
        const t = { uri: location.origin + s.slice(1) };
        return Promise.all(
          i.map((s) => {
            switch (s) {
              case 'exports':
                return r;
              case 'module':
                return t;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = n(...e);
          return r.default || (r.default = s), r;
        });
      }));
  };
}
define('./sw.js', ['./workbox-a8b10d99'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url:
            '/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.4f28a96f7c001568836d.js',
          revision: 'grq6Q_lWm_ViggRfHNYs_'
        },
        {
          url:
            '/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.ac4bf78a3ada1e32e97a.js',
          revision: 'grq6Q_lWm_ViggRfHNYs_'
        },
        {
          url: '/_next/static/chunks/framework.abffcf18e526b7c0dbcd.js',
          revision: 'grq6Q_lWm_ViggRfHNYs_'
        },
        {
          url: '/_next/static/chunks/main-2d010210f124fc3eae11.js',
          revision: 'grq6Q_lWm_ViggRfHNYs_'
        },
        {
          url: '/_next/static/chunks/pages/_app-4a2fa5e411409b92dfa7.js',
          revision: 'grq6Q_lWm_ViggRfHNYs_'
        },
        {
          url: '/_next/static/chunks/pages/_error-e9b30f4a6be93c8a052f.js',
          revision: 'grq6Q_lWm_ViggRfHNYs_'
        },
        {
          url: '/_next/static/chunks/pages/index-9d337aee1bf3376635dc.js',
          revision: 'grq6Q_lWm_ViggRfHNYs_'
        },
        {
          url: '/_next/static/chunks/polyfills-4f14e8c8ea1352d3ef0d.js',
          revision: 'grq6Q_lWm_ViggRfHNYs_'
        },
        {
          url: '/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js',
          revision: 'grq6Q_lWm_ViggRfHNYs_'
        },
        {
          url: '/_next/static/grq6Q_lWm_ViggRfHNYs_/_buildManifest.js',
          revision: 'grq6Q_lWm_ViggRfHNYs_'
        },
        {
          url: '/_next/static/grq6Q_lWm_ViggRfHNYs_/_ssgManifest.js',
          revision: 'grq6Q_lWm_ViggRfHNYs_'
        },
        {
          url: '/img/hero-illustration.svg',
          revision: '5fd5143cba1046a214d9a359fce22e89'
        },
        {
          url: '/img/icon-192.png',
          revision: 'd27169d080684ebb57b8387d05c4b444'
        },
        {
          url: '/img/icon-512.png',
          revision: 'f1d74b43a3832183202483a40d9e9d84'
        },
        {
          url: '/img/logo-gh.svg',
          revision: 'e3a0c31390db72fd374570f4a57c56b0'
        },
        { url: '/img/logo.svg', revision: '202525302ad30aca5b2b790d4b0b5796' },
        { url: '/manisfest.json', revision: 'c4d8d64468bcf31e13330cd8756c4189' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    );
});
