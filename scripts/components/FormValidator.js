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
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._submitButton = this._formElement.querySelector(this._popupSaveButtonSelector);
  }


  _showInputError(_inputElement, _currentErrorElement, _errorMessage) {
    _currentErrorElement.classList.add(this._errorElementVisibleClass);
    _currentErrorElement.textContent = _errorMessage;
    _inputElement.classList.add(this._inputElementTypeInvalid);
  };

  _hideInputError(_inputElement, _currentErrorElement) {
    _currentErrorElement.classList.remove(this._errorElementVisibleClass);
    _currentErrorElement.textContent = '';
    _inputElement.classList.remove(this._inputElementTypeInvalid);
  };

  _isInputElementValid(_inputElement) {
    const _currentErrorElement = _inputElement.parentElement.querySelector(`${this._errorElementSelector}`);
    if (!_inputElement.validity.valid) {
      this._showInputError(_inputElement, _currentErrorElement, _inputElement.validationMessage);
    } else {
      this._hideInputError(_inputElement, _currentErrorElement);
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((_inputElement) => {
      return !_inputElement.validity.valid;
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
    this._toggleButtonState();

    this._inputList.forEach((_inputElement) => {

      _inputElement.addEventListener('input', () => {
        this._toggleButtonState();
        this._isInputElementValid(_inputElement);
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