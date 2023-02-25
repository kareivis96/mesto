import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._popup.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    const inputsValues = {};
    for (let input of this._inputs) {
      inputsValues[`${input.name}`] = input.value;
    }
    return inputsValues;
  }

  setEventListeners() {
    super.setEventListeners();
    if (this._popup.classList.contains('popup_opened')) {
      this._form.addEventListener('submit', this._handleSubmitForm.bind(this));
    } else {
      this._form.removeEventListener('submit', this._handleSubmitForm.bind(this));
    }
  }

  close() {
    super.close();
    this._form.reset();
  }
}