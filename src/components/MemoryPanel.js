// src/components/MemoryPanel.js

export default class MemoryPanel {
  constructor(selector) {
    this.panel = document.querySelector(selector);
    this.img = document.createElement('img');
    this.caption = document.createElement('div');

    this.panel.appendChild(this.img);
    this.panel.appendChild(this.caption);

    this.panel.style.display = 'none';
    this.ready = true;
  }

  show(data) {
    if (!this.ready) return;
    this.ready = false;

    this.img.src = data.img;
    this.caption.textContent = data.title || 'Без подписи';

    this.panel.style.display = 'block';

    setTimeout(() => {
      this.ready = true;
    }, 3000); // автоматически разблокируем через 3 секунды
  }

  hide() {
    this.panel.style.display = 'none';
    this.ready = true;
  }
}
