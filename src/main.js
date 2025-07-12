// src/main.js

// Определяем, какой экран открыт
const page = document.body.dataset.page;

async function init() {
  try {
    switch (page) {
      case 'index':
        const indexModule = await import('./views/index.js');
        indexModule.initMap();
        break;
      case 'start':
        const startModule = await import('./views/start.js');
        startModule.initStart();
        break;
      case 'album':
        const albumModule = await import('./views/album.js');
        albumModule.initAlbum();
        break;
      default:
        console.warn('main.js: неизвестная страница');
    }
  } catch (err) {
    console.error('main.js: ошибка при инициализации:', err);
  }
}

document.addEventListener('DOMContentLoaded', init);
