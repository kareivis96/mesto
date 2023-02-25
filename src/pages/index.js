import { Card } from "../scripts/components/card.js";
import { initialCards, validationConfig } from "../scripts/vendor/data.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { Section } from "../scripts/components/Section.js";
import './index.css';


const buttonToOpenCardPopup = document.querySelector('.profile__add-button');
const buttonToOpenEditProfile = document.querySelector('.profile__edit-button');
const imagePopup = new PopupWithImage('#image-popup');
const profilePopupValidation = new FormValidator(validationConfig, '#edit-profile-popup');
const cardPopupValidation = new FormValidator(validationConfig, '#add-card-popup');


const userInfo = new UserInfo({
  nameSelector: '.profile__heading',
  aboutMeSelector: '.profile__paragraph',
});

const popupEditProfile = new PopupWithForm('#edit-profile-popup', (inputValues) => {
  userInfo.setUserInfo({
    name: inputValues.formName,
    aboutMe: inputValues.formJob,
  });
});


const renderCard = (item) => {
  const currentCard = new Card({
    cardTemplateSelector: '#card-template',
    cardUrl: item.link,
    cardName: item.name,
  }, (link, name) => {
    imagePopup.open(link, name);
  }).createCard();
  cardsSection.addItem(currentCard);
};
const cardsSection = new Section({
  items: initialCards,
  renderer: renderCard,
}, '.gallery__list');

cardsSection.renderItems();

const popupToCreateCard = new PopupWithForm('#add-card-popup', ({ addFormUrl, addFormName }) => {
  renderCard({ name: addFormName, link: addFormUrl });
});

buttonToOpenCardPopup.addEventListener('click', evt => popupToCreateCard.open());
buttonToOpenEditProfile.addEventListener('click', evt => {
  popupEditProfile.setDefaultInputsValues(userInfo.getUserInfo());
  popupEditProfile.open();
});
profilePopupValidation.enableValidation();
cardPopupValidation.enableValidation();