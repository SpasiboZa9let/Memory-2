import MapRenderer from '../components/MapRenderer.js';
import MemoryPanel from '../components/MemoryPanel.js';
import ProgressBar from '../components/ProgressBar.js';
import { drawRoute } from '../utils/drawRoute.js';
import { MARKERS } from '../data/markers.js';
import AudioManager from '../managers/AudioManager.js';

export function initMap() {
  const panel = new MemoryPanel('#memory-panel');
  new MapRenderer('#map', MARKERS, panel);
  new ProgressBar(MARKERS.length, '#progress-bar', '#open-album');
  drawRoute();

  const audio = new AudioManager();
  document.addEventListener('click', () => audio.initOnce(), { once: true });

  const btn = document.getElementById('audio-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const on = audio.toggle();
      btn.textContent = on ? '🔊' : '🔇';
    });
  }
}
