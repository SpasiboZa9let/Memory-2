// src/utils/assetPath.js

const base =
  (typeof import.meta !== 'undefined' &&
   import.meta.env &&
   import.meta.env.BASE_URL) || '';

export const photo = (filename) => `${base}assets/photos/${filename}`;
export const audio = (filename) => `${base}assets/audio/${filename}`;
export const icon  = () => `${base}assets/icons/favicon.ico`;
