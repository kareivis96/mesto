import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._popup.querySelectorAll('.popup__input');
    this._handleFormSubmit = this.onFormSubmit.bind(this);
  }

  _getInputValues() {
    const inputsValues = {};
    for (let input of this._inputs) {
      inputsValues[input.name] = input.value;
    }
    return inputsValues;
  }

  setDefaultInputsValues(data) {
    for (let input of this._inputs) {
      input.value = data[input.name];
    }
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    this._handleSubmitForm(this._getInputValues());
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleFormSubmit);
  }

  removeEventListeners() {
    super.removeEventListeners();
    this._form.removeEventListener('submit', this._handleFormSubmit);
  }

  close() {
    super.close();
    this._form.reset();
  }
}