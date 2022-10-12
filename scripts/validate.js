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
function showInputError(configObject, formElement, inputElement, errorMessage) {
  const errorElement = inputElement.parentNode.querySelector(configObject.errorElementSelector);

  errorElement.classList.add(configObject.errorElementVisibleClass);
  errorElement.textContent = errorMessage;
  inputElement.classList.add(configObject.inputElementTypeInvalid);
};
// функция скрывает ошибку в валидации
function hideInputError(configObject, formElement, inputElement) {
  const errorElement = inputElement.parentNode.querySelector(configObject.errorElementSelector);

  errorElement.classList.remove(configObject.errorElementVisibleClass);
  errorElement.textContent = '';
  inputElement.classList.remove(configObject.inputElementTypeInvalid);
};
// функция проверяет инпут на валидность
function isInputElementValid(configObject, formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(configObject, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(configObject, formElement, inputElement);
  }
};


// функция проверяет нет ли невалидных инпутов в форме
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
// функция изменяет состояние кнопки, в зависимости от наличия невалидных инпутов
function toggleButtonState(configObject, inputList, submitButton) {
  if (hasInvalidInput(inputList)) {
    submitButton.classList.add(configObject.popupSaveButtonDisabledSelector);
    submitButton.setAttribute('disabled', true);
  } else {
    submitButton.classList.remove(configObject.popupSaveButtonDisabledSelector);
    submitButton.removeAttribute('disabled');
  }
};


// функция перебирает инпуты из массива и вешает на них слушатели событий
function setEventListeners(configObject, formElement) {
  const inputList = Array.from(formElement.querySelectorAll(configObject.inputSelector));
  const submitButton = formElement.querySelector(configObject.popupSaveButtonSelector);

  toggleButtonState(configObject, inputList, submitButton);

  inputList.forEach((inputElement) => {
    // функция применяет функции проверки инпутов на валидность и состояние кнопки
    function ApplyCheckFunctions() {
      toggleButtonState(configObject, inputList, submitButton);
      isInputElementValid(configObject, formElement, inputElement);
    }
    inputElement.addEventListener('input', ApplyCheckFunctions);
    document.addEventListener('click', ApplyCheckFunctions);
  });
};


// функция перебирает массив из форм на странице и включает валидацию для каждой из них
function enableValidation(configObject) {
  const formList = Array.from(document.querySelectorAll(configObject.popupFormSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(configObject, formElement);
  });
};



enableValidation(validationConfig);