/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/styles.css",
    "revision": "25be050f420f73eba4632914ec8f6418"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "aff216fb9e82586af0e71e0ac96f9457"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "aff216fb9e82586af0e71e0ac96f9457"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "aff216fb9e82586af0e71e0ac96f9457"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "aff216fb9e82586af0e71e0ac96f9457"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "aff216fb9e82586af0e71e0ac96f9457"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "aff216fb9e82586af0e71e0ac96f9457"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "0e553cd5e8edf74189a981ded979ff6f"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "aff216fb9e82586af0e71e0ac96f9457"
  },
  {
    "url": "index.html",
    "revision": "227d27a9a1d5eb03e7a6ada9aadad858"
  },
  {
    "url": "js/scripts.js",
    "revision": "0e2041beac7f9e5232b823d334bc2f03"
  },
  {
    "url": "manifest.json",
    "revision": "faafc1037b8b03472d7f9f674536c7f5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
