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

const handleImgClick = (link, name) => {
  imagePopup.open(link, name);
}

const renderCard = (card, userId) => {
  const currentCard = new Card(
    '#card-template',
    userId,
    card,
    handleImgClick,
    (dataId, isLiked) => {
      if (isLiked) {
        api.removeLike(dataId).then( res => {
          currentCard.setLikeInactive(res);
        })
      } else {
        api.setLike(dataId).then( res => {
          currentCard.setLikeActive(res);
        })
      }
    },
    () => {
      const popupToDeleteCard = new PopupWithForm('#confirm-delete-popup', () => {
        api.removeCard(card._id)
          .then(res => {
            currentCard.removeCard();
          })
          .catch(err => console.log('Ошибка: ' + err));
      });
      popupToDeleteCard.open();
    },
  );
  cardsSection.addItem(currentCard.createCard());
};
const cardsSection = new Section(renderCard, '.gallery__list');

const popupToCreateCard = new PopupWithForm('#add-card-popup', ({ addFormUrl, addFormName }) => {
  Promise.all([ api.getUserData(), api.addNewCard({name: addFormName, link: addFormUrl}) ])
    .then( ([ userData, card ]) => {
      cardsSection.renderItems([{ ...card }], userData._id);
    })
    .catch(err => console.log('Ошибка: ' + err))
});

// загрузка данных пользователя с сервера и стартовых карточек
Promise.all([ api.getUserData(), api.getStartedCardsPack()])
  .then(([ userData, initialCards ]) => {
    userInfo.setUserInfo({
      name: userData.name,
      aboutMe: userData.about,
    })
    cardsSection.renderItems(initialCards.reverse(), userData._id);
  })
  .catch(err => console.log('Ошибка: ' + err));


buttonToOpenCardPopup.addEventListener('click', evt => popupToCreateCard.open());
buttonToOpenEditProfile.addEventListener('click', evt => {
  popupEditProfile.setDefaultInputsValues(userInfo.getUserInfo());
  popupEditProfile.open();
});
profilePopupValidation.enableValidation();
cardPopupValidation.enableValidation();