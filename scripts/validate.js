export class FormValidator {
  constructor(data, formElement) {
    this._formElement = formElement;
    this._errorElementSelector = data.errorElementSelector;
    this._errorElementVisibleClass = data.errorElementVisibleClass;
    this._inputElementTypeInvalid = data.inputElementTypeInvalid;
    this._inputSelector = data.inputSelector;
    this._popupSaveButtonSelector = data.popupSaveButtonSelector;
    this._popupFormSelector = data.popupFormSelector;
    this._popupSaveButtonDisabledSelector = data.popupSaveButtonDisabledSelector;
    this._popupSelector = data.popupSelector;
    this._popupOpenedSelector = data.popupOpenedSelector;
    this._errorElement = this._formElement.querySelector(this._errorElementSelector);
  }


  _showInputError(inputElement, errorMessage) {
    this._errorElement.classList.add(this._errorElementVisibleClass);
    this._errorElement.textContent = errorMessage;
    inputElement.classList.add(this._inputElementTypeInvalid);
  };

  _hideInputError(inputElement) {
    this._errorElement.classList.remove(this._errorElementVisibleClass);
    this._errorElement.textContent = '';
    inputElement.classList.remove(this._inputElementTypeInvalid);
  };

  _isInputElementValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._submitButton && this._hasInvalidInput()) {
      this._submitButton.classList.add(this._popupSaveButtonDisabledSelector);
      this._submitButton.setAttribute('disabled', true);
    } else if (this._submitButton) {
      this._submitButton.classList.remove(this._popupSaveButtonDisabledSelector);
      this._submitButton.removeAttribute('disabled');
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._submitButton = this._formElement.querySelector(this._popupSaveButtonSelector);

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {

      inputElement.addEventListener('input', () => {
        this._toggleButtonState();
        this._isInputElementValid(inputElement);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  };
}