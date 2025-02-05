// ==UserScript==
// @name         Clean Twitter
// @namespace    http://antfu.me/
// @version      0.0.0
// @description  Have some peace on Twitter
// @author       Anthony Fu
// @match        https://twitter.com/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const style = document.createElement('style')
  const hides = [
    // verified badge
    '*:has(> * > [aria-label="Verified account"])',
    // menu
    '[aria-label="Communities (New items)"], [aria-label="Communities"], [aria-label="Twitter Blue"], [aria-label="Timeline: Trending now"], [aria-label="Who to follow"], [aria-label="Search and explore"], [aria-label="Verified Organizations"]',
    // submean
    '* > [href="/i/verified-orgs-signup"]',
    // sidebar
    '[aria-label="Trending"] > * > *:nth-child(3), [aria-label="Trending"] > * > *:nth-child(4)'
  ]
  style.innerHTML = [
    `${hides.join(',')}{ display: none !important; }`,
    // styling
    '[aria-label="Search Twitter"] { margin-top: 20px !important; }'
  ].join('')
  document.body.appendChild(style);
})();
