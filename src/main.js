// src/main.js

import './styles/main.css';

import { initMap } from './core/mapController';
import { initAudio } from './core/audioController';

window.addEventListener('DOMContentLoaded', () => {
  initAudio();
  initMap();
});
