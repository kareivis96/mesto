export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeBtutton = this._popup.querySelector('.close-button');
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
    this.setEventListeners();
  }

  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  }

  setEventListeners() {
    if (this._popup.classList.contains('popup_opened')) {
      this._popup.addEventListener('mousedown', this._hendlerToClosePopupOnClickOverlay.bind(this));
      this._closeBtutton.addEventListener('click', this.close.bind(this));
      document.addEventListener('keydown', this._hendlerToClosePopupOnClickEsc.bind(this));
    } else {
      this._popup.removeEventListener('mousedown', this._hendlerToClosePopupOnClickOverlay.bind(this));
      this._closeBtutton.removeEventListener('click', this.close.bind(this));
      document.removeEventListener('keydown', this._hendlerToClosePopupOnClickEsc.bind(this));
    }
  }
}







// функция закрытия попапа по нажатию на оверлей
// function hendlerToClosePopupOnClickOverlay(evt) {
//   if (evt.target === evt.currentTarget) {
//     closePopup(evt.currentTarget);
//   }
// };

// функция закрытия попапа по нажатию на Esc
// function hendlerToClosePopupOnClickEsc(evt) {
//   if (evt.key === 'Escape') {
//     const popupToClose = document.querySelector('.popup_opened');
//     closePopup(popupToClose);
//   }
// };

// функция закрытия попапа
// function closePopup(popupToClose) {
//   popupToClose.classList.remove('popup_opened');
//   popupToClose.removeEventListener('mousedown', hendlerToClosePopupOnClickOverlay);
//   document.removeEventListener('keydown', hendlerToClosePopupOnClickEsc);
// };

// функция открыти попапа
// function openPopup(popupToOpen) {
//   popupToOpen.classList.add('popup_opened');
//   popupToOpen.addEventListener('mousedown', hendlerToClosePopupOnClickOverlay);
//   document.addEventListener('keydown', hendlerToClosePopupOnClickEsc);
// };