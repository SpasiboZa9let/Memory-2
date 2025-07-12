
// src/ui/mapView.js
import { qs } from '../utils/dom';

export function renderMap(mapSelector, markers, panel) {
  const mapEl = qs(mapSelector);
  if (!mapEl) {
    console.error(`Map container "${mapSelector}" not found`);
    return;
  }

  mapEl.style.position = 'relative';
  renderMarkers();

  window.addEventListener('resize', renderMarkers);

  function renderMarkers() {
    mapEl.querySelectorAll('.marker').forEach(n => n.remove());
    const { width, height } = mapEl.getBoundingClientRect();

    markers.forEach((m) => {
      if (m.x < 0 || m.x > 1 || m.y < 0 || m.y > 1) return;

      const el = document.createElement('div');
      el.className = 'marker';
      el.style.left = `${m.x * width}px`;
      el.style.top = `${m.y * height}px`;
      el.style.backgroundImage = `url(${m.img})`;
      el.title = m.title;
      el.onclick = () => panel?.ready && panel.show(m);

      mapEl.appendChild(el);
    });
  }
}
