import { Card } from "./card.js";
import { initialCards } from "./data.js";

const buttonToOpenEditProfile = document.querySelector('.profile__edit-button');
const buttonToCloseEditProfile = document.querySelector('#edit-profile-close-button');
const popupEditProfile = document.querySelector('#edit-profile-popup');
const formEditProfile = document.querySelector('#edit-profile-form');
const inputNameEditProfile = document.querySelector('#edit-profile-input-name');
const inputJobEditProfile = document.querySelector('#edit-profile-input-job');
const profileName = document.querySelector('.profile__heading');
const profileJob = document.querySelector('.profile__paragraph');

const buttonToOpenCardPopup = document.querySelector('.profile__add-button');
const popupToCreateCard = document.querySelector('#add-card-popup');
const buttonToCloseCardPopup = document.querySelector('#add-card-close-button');
const formCreateCard = document.querySelector('#add-card-form');
const inputNameCreateCard = document.querySelector('#add-card-input-name');
const inputUrlCreateCard = document.querySelector('#add-card-input-url');

const galleryList = document.querySelector('.gallery__list');

// const cardTemplate = document.querySelector('#card-template').content;

const imagePopup = document.querySelector('#image-popup');
const imagePopupImg = document.querySelector('.image-block__img');
const imagePopupHeading = document.querySelector('.image-block__heading');
const imagePopupCloseButton = document.querySelector('#image-block-close-button');

const popupList = Array.from(document.querySelectorAll('.popup'));

// функция закрытия попапа по нажатию на оверлей
function hendlerToClosePopupOnClickOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    evt.currentTarget.classList.remove('popup_opened');
  }
};

// функция закрытия попапа по нажатию на Esc
function hendlerToClosePopupOnClickEsc(evt) {
  if (evt.key === 'Escape') {
    const popupToClose = document.querySelector('.popup_opened');
    popupToClose.classList.remove('popup_opened');
  }
};

// функция закрытия попапа
function closePopup(popupToClose) {
  popupToClose.classList.remove('popup_opened');
  popupToClose.removeEventListener('click', hendlerToClosePopupOnClickOverlay);
  document.removeEventListener('keydown', hendlerToClosePopupOnClickEsc);
};

// функция открыти попапа
function openPopup(popupToOpen) {
  popupToOpen.classList.add('popup_opened');
  popupToOpen.addEventListener('click', hendlerToClosePopupOnClickOverlay);
  document.addEventListener('keydown', hendlerToClosePopupOnClickEsc);
};

// функция чтоб сохранить изменения в попап профиля
function saveProfileChanges() {
  profileName.textContent = inputNameEditProfile.value;
  profileJob.textContent = inputJobEditProfile.value;
}

// открыть попап редактирования профиля
buttonToOpenEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
  inputNameEditProfile.value = profileName.textContent;
  inputJobEditProfile.value = profileJob.textContent;
});

// сохранить изменения и закрыть попап профиля
formEditProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();

  saveProfileChanges();
  closePopup(popupEditProfile);
});

// закрыть попап редактирования профиля
buttonToCloseEditProfile.addEventListener('click', () => closePopup(popupEditProfile));

// открытие попапа для добавления карточек
buttonToOpenCardPopup.addEventListener('click', () => openPopup(popupToCreateCard));

// закрытие попапа для добавления карточек
buttonToCloseCardPopup.addEventListener('click', () => {
  formCreateCard.reset();
  closePopup(popupToCreateCard);
});

// добавление карточки в галерею с последующим закрытием попапа
formCreateCard.addEventListener('submit', (evt) => {
  evt.preventDefault();

  galleryList.prepend(new Card({
    cardTemplateSelector: '#card-template',
    cardUrl: inputUrlCreateCard.value,
    cardName: inputNameCreateCard.value,
    imagePopupElement: imagePopup,
  }).createCard());

  formCreateCard.reset();
  closePopup(popupToCreateCard);
});

// добавление 6-ти базовых карточек { cardUrl: el.link, cardName: el.name }
initialCards.forEach((el) => {
  galleryList.append(new Card({
    cardTemplateSelector: '#card-template',
    cardUrl: el.link,
    cardName: el.name,
    imagePopupElement: imagePopup,
  }).createCard());
});

// закрытие попапа с картинкой
imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));


function handlerOpenImagePopup(evt) {
  openPopup(imagePopup);
};