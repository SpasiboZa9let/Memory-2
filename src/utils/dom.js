// src/utils/dom.js

export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
