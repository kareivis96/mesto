export class FormValidator {
  constructor(data, formElement) {
    this._formElement = formElement;
    this._submitButton = this._formElement.querySelector(data.popupSaveButtonSelector);
    this._inputWrappers = document.querySelectorAll(data.inputWrapperSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(data.inputSelector));
    this._errorElementSelector = data.errorElementSelector;
    this._errorElementVisibleClass = data.errorElementVisibleClass;
    this._inputTypeInvalidClass = data.inputTypeInvalidClass;
    this._classDisabledSaveBtn = data.classDisabledSaveBtn;
    this._popupOpenedSelector = data.popupOpenedSelector;
    this._inputSelector = data.inputSelector;
  }


  _showInputError(inputElement, errorElement, _errorMessage) {
    errorElement.classList.add(this._errorElementVisibleClass);
    errorElement.textContent = _errorMessage;
    inputElement.classList.add(this._inputTypeInvalidClass);
  };

  _hideInputError(inputElement, errorElement) {
    errorElement.classList.remove(this._errorElementVisibleClass);
    errorElement.textContent = '';
    inputElement.classList.remove(this._inputTypeInvalidClass);
  };

  _isInputElementValid(wrapper, input) {
    const currentErrorElement = wrapper.querySelector(`${this._errorElementSelector}`);
    if (!input.validity.valid) {
      this._showInputError(input, currentErrorElement, input.validationMessage);
    } else {
      this._hideInputError(input, currentErrorElement);
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _setButtonActive() {
    this._submitButton.classList.remove(this._classDisabledSaveBtn);
    this._submitButton.removeAttribute('disabled');
  }

  _setButtonDisabled() {
    this._submitButton.classList.add(this._classDisabledSaveBtn);
    this._submitButton.setAttribute('disabled', true);
  }

  _toggleButtonState() {
    this._hasInvalidInput()
    ? this._setButtonDisabled()
    : this._setButtonActive();
  }

  _setEventListeners() {
    this._toggleButtonState();

    this._formElement.addEventListener('reset', this._setButtonDisabled.bind(this));
    this._inputWrappers.forEach((inputWrapper) => {
      const currentInput = inputWrapper.querySelector(this._inputSelector);
      currentInput.addEventListener('input', () => {
        this._toggleButtonState();
        this._isInputElementValid(inputWrapper, currentInput);
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}