import { Card } from "../components/card.js";
import { initialCards } from "../vendor/data.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section.js";


const validationConfig = {
  errorElementSelector: '.popup__error-text',
  errorElementVisibleClass: 'popup__error-text_type_visible',
  inputElementTypeInvalid: 'popup__input_type_invalid',
  inputSelector: '.popup__input',
  popupSaveButtonSelector: '.popup__save-button',
  popupFormSelector: '.popup__form',
  popupSaveButtonDisabledSelector: 'popup__save-button_disabled',
  popupSelector: '.popup',
  popupOpenedSelector: '.popup_opened',
}
const buttonToOpenCardPopup = document.querySelector('.profile__add-button');
const buttonToOpenEditProfile = document.querySelector('.profile__edit-button');
const ImagePopup = new PopupWithImage('#image-popup');
const profilePopupValidation = new FormValidator(validationConfig, '#edit-profile-popup');
const cardPopupValidation = new FormValidator(validationConfig, '#add-card-popup');


const userInfo = new UserInfo({
  nameSelector: '.profile__heading',
  aboutMeSelector: '.profile__paragraph',
});

const popupEditProfile = new PopupWithForm('#edit-profile-popup', (evt) => {
  evt.preventDefault();
  const inputValues = popupEditProfile._getInputValues();
  userInfo.setUserInfo({
    name: inputValues.formName,
    aboutMe: inputValues.formJob,
  });
});

const defaultCardRender = new Section({
  items: initialCards,
  renderer: (item) => {
    const currentCard = new Card({
      cardTemplateSelector: '#card-template',
      cardUrl: item.link,
      cardName: item.name,
    }, () => {
      ImagePopup.open(item.link, item.name);
    }).createCard();
    defaultCardRender.addItem(currentCard);
  },
}, '.gallery__list');

const popupToCreateCard = new PopupWithForm('#add-card-popup', (evt) => {
  evt.preventDefault();
  const currentInputsValues = popupToCreateCard._getInputValues();

  const cardRenderOnSubmit = new Section({
    items: [currentInputsValues],
    renderer: (item) => {
      const currentCard = new Card({
        cardTemplateSelector: '#card-template',
        cardUrl: item.addFormUrl,
        cardName: item.addFormName,
      }, () => {
        ImagePopup.open(item.addFormUrl, item.addFormName);
      }).createCard();
      cardRenderOnSubmit.addItem(currentCard);
    },
  }, '.gallery__list');
  cardRenderOnSubmit.renderItems();
});


buttonToOpenCardPopup.addEventListener('click', evt => popupToCreateCard.open());
buttonToOpenEditProfile.addEventListener('click', evt => popupEditProfile.open());
defaultCardRender.renderItems();
profilePopupValidation.enableValidation();
cardPopupValidation.enableValidation();