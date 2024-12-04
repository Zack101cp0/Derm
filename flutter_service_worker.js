'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "033d8ff485fc95e9e32cb899f8b2b062",
"assets/AssetManifest.bin.json": "a1f2fcf77821274c63d75da3aff16382",
"assets/AssetManifest.json": "d190dfc3b9a5a9373e7a4db8fa21949c",
"assets/assets/fonts/Baloo2-Bold.ttf": "e6ea43c5e41884cff68110bb88dbdbab",
"assets/assets/fonts/Baloo2-Medium.ttf": "4ad8149153b5d0f27200a938be9298fb",
"assets/assets/fonts/Baloo2-Regular.ttf": "f8f89a31657b9ea44e160870759723a4",
"assets/assets/images/bg.jpg": "cdd5f16c81ee40c0f51856d04dd102a1",
"assets/assets/images/fb.png": "7f46251a58c4e0dd8c360b8eb352193c",
"assets/assets/images/firefighter.png": "19f4c5438d028fb868128cecf44986bd",
"assets/assets/images/Group%2520358.png": "940de076e7b635210c3648b94d40811b",
"assets/assets/images/Group%2520397.png": "f86c162ed1d467701284ea94a523e71f",
"assets/assets/images/ig.png": "43d7edd23ef93ae55509067b3152ef56",
"assets/assets/images/illus.jpg": "7cb47bfca9393217556716fc9737ae9e",
"assets/assets/images/illus2.jpg": "862c0f6bdb5a6573223b63fb3627fcce",
"assets/assets/images/image%2520285.png": "49ebd20f7c48dcc6d4acadd53dbebe0f",
"assets/assets/images/image%2520305.png": "c80fb18454e207e7aea092a7b8444b01",
"assets/assets/images/image%2520311.png": "f0a66591946c4a609a27a0154444f95a",
"assets/assets/images/image%2520312.png": "e9f0d5c24df18588624b3f3a71d54fbf",
"assets/assets/images/image%2520315.png": "0ccd4cf19f9fdeabffab4f444faf2d13",
"assets/assets/images/image%2520344.png": "6f6bbb16aec97391aefe120ec5a4e6a2",
"assets/assets/images/image%2520366.png": "2163dd1bd6fee3673c282e7a563b9d3b",
"assets/assets/images/logo.png": "ac254678b5c2f011484d3f341ebd2760",
"assets/assets/images/tiktok.png": "5823927d34c4a53f9b0a905518625b2b",
"assets/assets/images/twitter.png": "8055439973f30c5aa2ccf9e755206ba4",
"assets/assets/models/labels.txt": "0e314087849ae11d6f375c87209debe0",
"assets/assets/models/model_unquant.tflite": "cbbd11ec9829f664d73dc8bd108d6c16",
"assets/FontManifest.json": "925c6508accbe4906e1a084174606fbb",
"assets/fonts/MaterialIcons-Regular.otf": "4350f847b6f469143d6e9b9b04aa8be8",
"assets/NOTICES": "2f6df3302863bec08dacbc6d8bf800dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2ba705aa0afd56f77c6172b2ae552f26",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b2eff1e21b2dce9e9908a5536502526f",
"/": "b2eff1e21b2dce9e9908a5536502526f",
"main.dart.js": "c92eba753f11e1628580d13f022c6958",
"manifest.json": "709b8c56758d58f672430ca934e8e507",
"tflite/tf-backend-cpu.js": "006450b13e0fb4b7493d0c2333a4468e",
"tflite/tf-core.js": "9f3e29d81a38c0420f3c5aed8f45f2ae",
"tflite/tf-tflite.min.js": "e91a4aecf3d5df67ac7064121f3e080e",
"tflite/tflite_web_api_cc.js": "a40b14142aaf7ff3c50574173cfe2339",
"tflite/tflite_web_api_cc.wasm": "00d72420a913989f016f61d15975da6d",
"tflite/tflite_web_api_cc_simd.js": "db0158d9228c6a956684ce5b7a46904a",
"tflite/tflite_web_api_cc_simd.wasm": "6ef1acb772648ab13dfe78e056170d7f",
"tflite/tflite_web_api_cc_simd_threaded.js": "b54e45bcacd1bcc93239934d803cb2fa",
"tflite/tflite_web_api_cc_simd_threaded.wasm": "f06a0c782821c4106e0b1aca8c176aa2",
"tflite/tflite_web_api_cc_simd_threaded.worker.js": "42238b8e54e3e9806513d306fa9e0ac3",
"tflite/tflite_web_api_cc_threaded.js": "b4762445eb7048a00240cb3f4edadc56",
"tflite/tflite_web_api_cc_threaded.wasm": "7b024d51a041de73a4d1b26e0473cd02",
"tflite/tflite_web_api_cc_threaded.worker.js": "42238b8e54e3e9806513d306fa9e0ac3",
"version.json": "e2ea8789c7320133bc35fe8cdf23381f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
