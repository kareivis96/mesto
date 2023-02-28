import { Card } from "../scripts/components/card.js";
import { initialCards, validationConfig } from "../scripts/vendor/data.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { Section } from "../scripts/components/Section.js";
import { Api } from "../scripts/components/Api.js";
import './index.css';


const buttonToOpenCardPopup = document.querySelector('.profile__add-button');
const buttonToOpenEditProfile = document.querySelector('.profile__edit-button');
const imagePopup = new PopupWithImage('#image-popup');
const profilePopupValidation = new FormValidator(validationConfig, '#edit-profile-popup');
const cardPopupValidation = new FormValidator(validationConfig, '#add-card-popup');

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-60',
  token: '0de5ee20-cdc3-41ba-9a09-6a93d92b63aa',
});

const userInfo = new UserInfo({
  nameSelector: '.profile__heading',
  aboutMeSelector: '.profile__paragraph',
});

const popupEditProfile = new PopupWithForm('#edit-profile-popup', (inputValues) => {
  api.editProfile({ name: inputValues.formName, about: inputValues.formJob })
    .then(res => {
      userInfo.setUserInfo({
        name: res.name,
        aboutMe: res.about,
      });
    });
});

const handleLikeClick = (isLiked, userId) => {
  if (isLiked) {
    api.removeLike(userId).then( res => { console.log(isLiked) })
  } else {
    api.setLike(userId).then( res => { console.log(isLiked) })
  }
}

const handleImgClick = (link, name) => {
  imagePopup.open(link, name);
}

const renderCard = (card) => {
  const currentCard = new Card(
  '#card-template',
  card,
  handleImgClick,
  handleLikeClick,
  );
  cardsSection.addItem(currentCard.createCard());
};
const cardsSection = new Section(renderCard, '.gallery__list');

const popupToCreateCard = new PopupWithForm('#add-card-popup', ({ addFormUrl, addFormName }) => {
  api.addNewCard({name: addFormName, link: addFormUrl})
    .then(res => {
      console.log(res);
      cardsSection.renderItems([{ ...res }]);
    })
});

// загрузка данных пользователя с сервера
api.getUserData()
  .then(res => {
    userInfo.setUserInfo({
      name: res.name,
      aboutMe: res.about,
    });
  });

// рендер стартовых карточек
api.getStartedCardsPack()
  .then(res => cardsSection.renderItems(res));


buttonToOpenCardPopup.addEventListener('click', evt => popupToCreateCard.open());
buttonToOpenEditProfile.addEventListener('click', evt => {
  popupEditProfile.setDefaultInputsValues(userInfo.getUserInfo());
  popupEditProfile.open();
});
profilePopupValidation.enableValidation();
cardPopupValidation.enableValidation();