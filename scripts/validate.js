function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error-text`);

  errorElement.classList.add('popup__error-text_type_visible');
  errorElement.textContent = errorMessage;
  inputElement.classList.add('popup__input_type_invalid');
};

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error-text`);

  errorElement.classList.remove('popup__error-text_type_visible');
  errorElement.textContent = '';
  inputElement.classList.remove('popup__input_type_invalid');
};

function isInputElementValid(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const submitButton = formElement.querySelector('.popup__save-button');

  toggleButtonState(inputList, submitButton);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      toggleButtonState(inputList, submitButton);
      isInputElementValid(formElement, inputElement);
    });
  });
};

function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

function toggleButtonState(inputList, submitButton) {
  if (hasInvalidInput(inputList)) {
    submitButton.classList.add('popup__save-button_disabled');
  } else {
    submitButton.classList.remove('popup__save-button_disabled');
  }
};