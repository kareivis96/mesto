const editButton = document.querySelector('.profile__edit-button');
const editProfileCloseButton = document.querySelector('#edit-profile-close-button');
const editProfilePopup = document.querySelector('#edit-profile-popup');
const editProfileForm = document.querySelector('#edit-profile-form');
const editProfileInputName = document.querySelector('#edit-profile-input-name');
const editProfileInputJob = document.querySelector('#edit-profile-input-job');
const profileName = document.querySelector('.profile__heading');
const profileJob = document.querySelector('.profile__paragraph');

const galleryList = document.querySelector('.gallery__list');
const cardTemplate = document.querySelector('#card-template').content;

const addButton = document.querySelector('.profile__add-button');
const addCardPopup = document.querySelector('#add-card-popup');
const addCardCloseButton = document.querySelector('#add-card-close-button');
const addCardForm = document.querySelector('#add-card-form');
const addCardInputName = document.querySelector('#add-card-input-name');
const addCardInputUrl = document.querySelector('#add-card-input-url');

const imagePopup = document.querySelector('#image-popup');
const imagePopupImg = document.querySelector('.image-block__img');
const imagePopupHeading = document.querySelector('.image-block__heading');
const imagePopupCloseButton = document.querySelector('#image-block-close-button');


// функция создает карточку на основе template
function createCard(cardSample, cardUrl, cardName) {
  const cardListElement = cardSample.querySelector('#card-list-element').cloneNode(true);
  const cardListElementImage = cardListElement.querySelector('.card__img');
  const cardListElementText = cardListElement.querySelector('.card__text');

  cardListElementImage.src = cardUrl;
  cardListElementImage.alt = cardUrl;
  cardListElementText.textContent = cardName;

  bindCardLikeEvent(cardListElement);
  bindCardDeleteEvent(cardListElement);
  bindCardOpenImagePopupEvent(cardListElement);
  
  return cardListElement;
}

// функции вешают слушатели событий на созданные карточки
function bindCardLikeEvent(listElement) {
  const likeButton = listElement.querySelector('.card__like-button');

  likeButton.addEventListener('click', () => likeButton.classList.toggle('card__like-button_active'));
}

function bindCardDeleteEvent(listElement) {
  const deleteButton = listElement.querySelector('.card__delete-button');

  deleteButton.addEventListener('click', () => deleteButton.closest('#card-list-element').remove());
}

function bindCardOpenImagePopupEvent(listElement) {
  const cardImage = listElement.querySelector('.card__img');

  cardImage.addEventListener('click', () => {
    openPopup(imagePopup);
    imagePopupImg.src = cardImage.src;
    imagePopupImg.alt = cardImage.alt;
    imagePopupHeading.textContent = cardImage.alt;
  });
}

// функции закрытия попапа
let closePopup = (popupForClose) => popupForClose.classList.remove('popup_opened');

// функция открыти попапа
let openPopup = (popupForOpen) => popupForOpen.classList.add('popup_opened');

// функция чтоб сохранить изменения и закрыть попап профиля
function saveProfileChanges() {
  profileName.textContent = editProfileInputName.value;
  profileJob.textContent = editProfileInputJob.value;
}

// СЛУШАТЕЛИ ДЛЯ ПРОФИЛЯ
// открыть попап редактирования профиля
editButton.addEventListener('click', () => {
  openPopup(editProfilePopup);
  editProfileInputName.value = profileName.textContent;
  editProfileInputJob.value = profileJob.textContent;
});

// сохранить изменения и закрыть попап профиля
editProfileForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  saveProfileChanges();
  closePopup(editProfilePopup);
});

// закрыть попап редактирования профиля
editProfileCloseButton.addEventListener('click', () => closePopup(editProfilePopup));

// СЛУШАТЕЛИ ДЛЯ КАРТОЧЕК
// открытие попапа для добавления карточек
addButton.addEventListener('click', () => openPopup(addCardPopup));

// закрытие попапа для добавления карточек
addCardCloseButton.addEventListener('click', () => closePopup(addCardPopup));

// добавление карточки в галерею с последующим закрытием попапа
addCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  galleryList.prepend(createCard(cardTemplate, addCardInputUrl.value, addCardInputName.value));
  addCardForm.reset();
  closePopup(addCardPopup);
});

// добавление 6-ти базовых карточек
initialCards.forEach((el) => {
  galleryList.append(createCard(cardTemplate, el.link, el.name));
});

// закрытие попапа с картинкой
imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));