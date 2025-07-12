// src/components/ProgressBar.js

export default class ProgressBar {
  constructor(markerCount, barSelector, albumBtnSelector) {
    this.markerCount = markerCount;
    this.progressBar = document.querySelector(barSelector);
    this.albumBtn = document.querySelector(albumBtnSelector);
    this.viewed = new Set();

    this._setupListeners();
  }

  _setupListeners() {
    const markers = document.querySelectorAll('.marker');
    if (!markers.length || !this.progressBar) return;

    markers.forEach((marker, idx) => {
      marker.addEventListener('mouseenter', () => this._onMarkerEnter(idx));
    });
  }

  _onMarkerEnter(idx) {
    if (this.viewed.has(idx)) return;

    this.viewed.add(idx);
    const percent = (this.viewed.size / this.markerCount) * 100;

    this.progressBar.style.width = `${percent}%`;

    if (this.viewed.size === this.markerCount) {
      this.progressBar.style.background =
        'repeating-linear-gradient(135deg,#4b3621,#4b3621 4px,#7a5c3e 4px,#7a5c3e 8px)';
      this.progressBar.style.boxShadow = '0 0 6px rgba(75,54,33,.5)';
      this.progressBar.style.height = '14px';

      this.albumBtn?.classList.remove('hidden');
      this.albumBtn?.classList.add('visible');

      localStorage.setItem('progressPercent', '100');
    } else {
      localStorage.setItem('progressPercent', percent.toFixed(1));
    }
  }
}

