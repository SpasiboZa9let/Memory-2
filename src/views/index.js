// src/views/index.js

import { MARKERS } from '../data/markers.js';
import MapRenderer from '../components/MapRenderer.js';
import MemoryPanel from '../components/MemoryPanel.js';
import ProgressBar from '../components/ProgressBar.js';
import { drawRoute } from '../utils/drawRoute.js';
import AudioManager from '../managers/AudioManager.js';

const audio = new AudioManager();

export function initMap() {
  const panel = new MemoryPanel('#memory-panel');
  const map = new MapRenderer('#map', MARKERS, panel);
  const progress = new ProgressBar(MARKERS.length, '#progress-bar', '#open-album');

  // инициализация маршрута и миниатюр
  setTimeout(() => drawRoute(), 100);
  injectPinThumbnails(MARKERS);

  // звук
  document.addEventListener('click', () => audio.initOnce(), { once: true });
  const btn = document.getElementById('audio-toggle');
  btn?.addEventListener('click', () => {
    const on = audio.toggle();
    btn.textContent = on ? '🔊' : '🔇';
  });
}

function injectPinThumbnails(markers) {
  const pins = document.querySelectorAll('#map .marker');

  pins.forEach((pin, idx) => {
    const m = markers[idx];
    if (!m) return;

    const clean = m.img.replace(/^\.?\//, '');
    const imgPath = clean.startsWith('photos/') ? clean : `photos/${clean}`;
    pin.style.backgroundImage = `url(${imgPath})`;
  });
}
