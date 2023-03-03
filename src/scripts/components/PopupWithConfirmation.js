import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._popup.querySelector('.popup__save-button');
    this._submitButtonDefaultText = this._submitButton.textContent;
    this._handleFormSubmit = this.onFormSubmit.bind(this);
  }

  _addPreloader() {
    this._submitButton.textContent = 'Сохранение...';
  }

  removePreloader() {
    this._submitButton.textContent = this._submitButtonDefaultText;
  }

  open(cardId, card) {
    super.open();
    this._cardId = cardId;
    this._card = card;
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    this._addPreloader();
    this._handleSubmitForm(this._cardId, this._card);
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleFormSubmit);
  }
}