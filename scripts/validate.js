const validationConfig = {
  errorElementSelector: '.popup__error-text',
  errorElementVisibleClass: 'popup__error-text_type_visible',
  inputElementTypeInvalid: 'popup__input_type_invalid',
  inputSelector: '.popup__input',
  popupSaveButtonSelector: '.popup__save-button',
  popupFormSelector: '.popup__form',
  popupSaveButtonDisabledSelector: 'popup__save-button_disabled',
  popupSelector: '.popup',
  popupOpenedSelector: '.popup_opened'
}


// функция показывает ошибку в валидации
function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = inputElement.parentNode.querySelector(validationConfig.errorElementSelector);

  errorElement.classList.add(validationConfig.errorElementVisibleClass);
  errorElement.textContent = errorMessage;
  inputElement.classList.add(validationConfig.inputElementTypeInvalid);
};
// функция скрывает ошибку в валидации
function hideInputError(formElement, inputElement) {
  const errorElement = inputElement.parentNode.querySelector(validationConfig.errorElementSelector);

  errorElement.classList.remove(validationConfig.errorElementVisibleClass);
  errorElement.textContent = '';
  inputElement.classList.remove(validationConfig.inputElementTypeInvalid);
};
// функция проверяет инпут на валидность
function isInputElementValid(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};


// функция проверяет нет ли невалидных инпутов в форме
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
// функция изменяет состояние кнопки, в зависимости от наличия невалидных инпутов
function toggleButtonState(inputList, submitButton) {
  if (hasInvalidInput(inputList)) {
    submitButton.classList.add(validationConfig.popupSaveButtonDisabledSelector);
    submitButton.setAttribute('disabled', true);
  } else {
    submitButton.classList.remove(validationConfig.popupSaveButtonDisabledSelector);
    submitButton.removeAttribute('disabled');
  }
};


// функция перебирает инпуты из массива и вешает на них слушатели событий
function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const submitButton = formElement.querySelector(validationConfig.popupSaveButtonSelector);

  toggleButtonState(inputList, submitButton);

  inputList.forEach((inputElement) => {
    // функция применяет функции проверки инпутов на валидность и состояние кнопки
    function ApplyCheckFunctions() {
      toggleButtonState(inputList, submitButton);
      isInputElementValid(formElement, inputElement);
    }
    inputElement.addEventListener('input', ApplyCheckFunctions);
    document.addEventListener('click', ApplyCheckFunctions);
  });
};


// функция перебирает массив из форм на странице и включает валидацию для каждой из них
function enableValidation(validationConfig) {
  const formList = Array.from(document.querySelectorAll(validationConfig.popupFormSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};



enableValidation(validationConfig);