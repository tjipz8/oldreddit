// ==UserScript==
// @name               Bring Back Old Reddit
// @description        Always redirects to old-Reddit, avoiding Reddit's redesign.
// @include            *://*.reddit.com/*
// @exclude            *://www.reddit.com/poll/*
// @version            1.00
// @run-at             document-start
// @author             tjipz8
// @grant              none
// ==/UserScript==

window.location.replace("https://old.reddit.com" + window.location.pathname);
