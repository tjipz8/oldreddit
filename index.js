// ==UserScript==
// @name               Redirect to old reddit from amp reddit
// @include            *://amp.reddit.com/*
// @version            1.00
// @run-at             document-start
// @author             tjipz8
// @grant              none
// ==/UserScript==

window.location.replace("https://old.reddit.com" + window.location.pathname);
