export class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(cardsArr, userId) {
    cardsArr.forEach(card => {
      this._renderer(card, userId);
    });
  }
}