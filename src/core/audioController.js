// src/core/audioController.js
import { audio } from '../utils/assetPath';

let bg = null;
let click = null;
let enabled = false;

export function initAudio() {
  bg = new Audio(audio('bg.mp3'));
  click = new Audio(audio('click.mp3'));

  bg.loop = true;
  bg.volume = 0.4;
  click.volume = 0.8;

  document.addEventListener('click', enableOnce, { once: true });

  const btn = document.getElementById('audio-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      toggle();
      btn.textContent = enabled ? '🔊' : '🔇';
    });
  }
}

function enableOnce() {
  if (enabled) return;
  enabled = true;
  bg.play().catch(() => {});
}

function toggle() {
  enabled = !enabled;
  if (enabled) bg.play();
  else bg.pause();
}
