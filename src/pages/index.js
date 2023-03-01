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
const avatarContainer = document.querySelector('.profile__avatar-container');
const avatar = document.querySelector('.profile__avatar');
const imagePopup = new PopupWithImage('#image-popup');
const profilePopupValidation = new FormValidator(validationConfig, '#edit-profile-popup');
const cardPopupValidation = new FormValidator(validationConfig, '#add-card-popup');
const avatarPopupValidation = new FormValidator(validationConfig, '#change-avatar-popup');

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-60',
  token: '0de5ee20-cdc3-41ba-9a09-6a93d92b63aa',
});

const userInfo = new UserInfo({
  nameSelector: '.profile__heading',
  aboutMeSelector: '.profile__paragraph',
});

const avatarPopup = new PopupWithForm('#change-avatar-popup', (inputValues) => {
  api.editAvatar(inputValues)
    .then(res => {
      avatar.src = res.avatar;
    })
    .catch(err => console.log('Ошибка: ' + err))
    .finally(() => avatarPopup.removePreloader())
})
avatarContainer.onclick = () => avatarPopup.open();

const popupEditProfile = new PopupWithForm('#edit-profile-popup', (inputValues) => {
  api.editProfile({ name: inputValues.formName, about: inputValues.formJob })
    .then(res => {
      userInfo.setUserInfo({
        name: res.name,
        aboutMe: res.about,
      })
    })
    .catch(err => console.log('Ошибка: ' + err))
    .finally(() => popupEditProfile.removePreloader())
});

const handleImgClick = (link, name) => {
  imagePopup.open(link, name);
}

const renderCard = (card) => {
  const currentCard = new Card(
    '#card-template',
    () => userInfo.getUserId(),
    card,
    handleImgClick,
    (dataId, isLiked) => {
      if (isLiked) {
        api.removeLike(dataId)
          .then(res => { currentCard.setLikeInactive(res) })
          .catch(err => console.log('Ошибка: ' + err))
      } else {
        api.setLike(dataId)
          .then(res => { currentCard.setLikeActive(res) })
          .catch(err => console.log('Ошибка: ' + err))
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
  api.addNewCard({ name: addFormName, link: addFormUrl })
    .then(card => {
      cardsSection.renderItems([{ ...card }]);
    })
    .catch(err => console.log('Ошибка: ' + err))
    .finally(() => popupToCreateCard.removePreloader())
});

// загрузка данных пользователя с сервера и стартовых карточек
Promise.all([api.getUserData(), api.getStartedCardsPack()])
  .then(([userData, initialCards]) => {
    userInfo.setUserInfo({
      name: userData.name,
      aboutMe: userData.about,
      userId: userData._id,
    })
    avatar.src = userData.avatar;
    cardsSection.renderItems(initialCards.reverse());
  })
  .catch(err => console.log('Ошибка: ' + err));


buttonToOpenCardPopup.addEventListener('click', evt => popupToCreateCard.open());
buttonToOpenEditProfile.addEventListener('click', evt => {
  popupEditProfile.setDefaultInputsValues(userInfo.getUserInfo());
  popupEditProfile.open();
});
profilePopupValidation.enableValidation();
cardPopupValidation.enableValidation();
avatarPopupValidation.enableValidation();