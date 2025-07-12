// src/components/MapRenderer.js

import { qs } from '../utils/dom.js';

export default class MapRenderer {
  constructor(mapSelector, markers, panel) {
    this.mapEl = qs(mapSelector);
    this.markers = markers;
    this.panel = panel;

    if (!this.mapEl) {
      console.error(`Map container "${mapSelector}" not found`);
      return;
    }

    this.mapEl.style.position = 'relative';

    this._onResize = this._renderMarkers.bind(this);
    window.addEventListener('resize', this._onResize);

    this._renderMarkers();
  }

  _renderMarkers() {
    this.mapEl.querySelectorAll('.marker').forEach(n => n.remove());

    const { width, height } = this.mapEl.getBoundingClientRect();

    this.markers.forEach(m => {
      if (m.x < 0 || m.x > 1 || m.y < 0 || m.y > 1) return;

      const el = document.createElement('div');
      el.className = 'marker';
      el.style.left = `${m.x * width}px`;
      el.style.top = `${m.y * height}px`;
      el.style.backgroundImage = `url(${m.img})`;
      el.title = m.title;

      el.onclick = () => this.panel?.ready && this.panel.show(m);

      this.mapEl.appendChild(el);
    });
  }

  destroy() {
    window.removeEventListener('resize', this._onResize);
  }
}

