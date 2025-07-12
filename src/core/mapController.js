// src/core/mapController.js
import { renderMap } from '../ui/mapView';
import { drawRoute } from '../utils/drawRoute';
import { MARKERS } from '../data/markers';
import { initMemoryPanel } from '../ui/memoryPanel';

export function initMap() {
  const panel = initMemoryPanel('#memory-panel');
  renderMap('#map', MARKERS, panel);

  // отрисовка маршрута после загрузки
  setTimeout(drawRoute, 100);
}
