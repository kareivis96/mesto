export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeBtutton = this._popup.querySelector('.close-button');
    this._handleOverlayClick = this._hendlerToClosePopupOnClickOverlay.bind(this);
    this._handleEscClick = this._hendlerToClosePopupOnClickEsc.bind(this);
    this._handleCloseBtnClick = this.close.bind(this);
  }

  _hendlerToClosePopupOnClickOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  _hendlerToClosePopupOnClickEsc(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClick);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClick);
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', this._handleOverlayClick);
    this._closeBtutton.addEventListener('click', this._handleCloseBtnClick);
  }
}