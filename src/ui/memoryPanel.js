// src/ui/memoryPanel.js
import { qs } from '../utils/dom';

export function initMemoryPanel(selector) {
  const panel = qs(selector);
  const dim = document.getElementById('dim-overlay');
  const titleEl = document.createElement('div');
  const img = document.createElement('img');
  const txt = document.createElement('div');

  titleEl.className = 'memory-title';
  txt.className = 'text';

  panel.appendChild(titleEl);
  panel.appendChild(img);
  panel.appendChild(txt);

  const isMobile = window.innerWidth < 768;

  const api = {
    ready: true,
    show(data) {
      if (!api.ready || !window.gsap) return;
      api.ready = false;

      document.querySelectorAll('.marker').forEach(el => {
        el.style.pointerEvents = 'none';
      });

      fadeOut().then(() => {
        img.src = data.img;
        img.alt = data.caption || '';
        txt.textContent = data.caption || '';
        titleEl.textContent = data.title || '';

        panel.classList.add('visible');
        dim?.classList.add('visible');

        gsap.set(titleEl, { opacity: 0, y: 30, scale: 1 });
        gsap.to(titleEl, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          onComplete: () => {
            gsap.to(titleEl, {
              opacity: 0,
              scale: 1.05,
              delay: 2.5,
              duration: 1.1,
              ease: 'power2.inOut',
              onComplete: () => {
                titleEl.textContent = '';
                api.ready = true;
                setTimeout(() => api.hide(), 1000);
                window.dispatchEvent(new CustomEvent('memoryPanelReady'));
              }
            });
          }
        });
      });
    },
    hide() {
      panel.classList.remove('visible');
      dim?.classList.remove('visible');
      titleEl.textContent = '';
      api.ready = true;
      document.querySelectorAll('.marker').forEach(el => {
        el.style.pointerEvents = 'auto';
      });
    }
  };

  function fadeOut() {
    return new Promise(resolve => {
      panel.classList.remove('visible');
      dim?.classList.remove('visible');
      setTimeout(resolve, 250);
    });
  }

  return api;
}
