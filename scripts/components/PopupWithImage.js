import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector('.image-block__img');
    this._popupText = this._popup.querySelector('.image-block__heading');
  }

  open(imgSrc, imgAlt) {
    this._popupImg.src = imgSrc;
    this._popupImg.alt = imgAlt;
    this._popupText.textContent = imgAlt;
    super.open();
  }
}