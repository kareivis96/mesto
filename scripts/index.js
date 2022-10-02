let editButton = document.querySelector('.profile__edit-button');
let editProfileCloseButton = document.querySelector('#edit-profile-close-button');
let editProfilePopup = document.querySelector('#edit-profile-popup');
let editProfileForm = document.querySelector('#edit-profile-form');
let editProfileInputName = document.querySelector('#edit-profile-input-name');
let editProfileInputJob = document.querySelector('#edit-profile-input-job');
let profileName = document.querySelector('.profile__heading');
let profileJob = document.querySelector('.profile__paragraph');

let galleryList = document.querySelector('.gallery__list');
let cardTemplate = document.querySelector('#card-template').content;

let addButton = document.querySelector('.profile__add-button');
let addCardPopup = document.querySelector('#add-card-popup');
let addCardCloseButton = document.querySelector('#add-card-close-button');
let addCardForm = document.querySelector('#add-card-form');
let addCardInputName = document.querySelector('#add-card-input-name');
let addCardInputUrl = document.querySelector('#add-card-input-url');

let imagePopup = document.querySelector('#image-popup');
let imagePopupImg = document.querySelector('.image-block__img');
let imagePopupHeading = document.querySelector('.image-block__heading');
let imagePopupCloseButton = document.querySelector('#image-block-close-button');


// функции закрытия попапа
let closePopup = (popupForClose) => popupForClose.classList.remove('popup_opened');

// функция открыти попапа
let openPopup = (popupForOpen) => popupForOpen.classList.add('popup_opened');

// функция чтоб сохранить изменения и закрыть попап профиля
function saveChanges(evt) {
  evt.preventDefault();
  
  profileName.textContent = editProfileInputName.value;
  profileJob.textContent = editProfileInputJob.value;
  closePopup(editProfilePopup);
}

// функции вешают слушатели событий на созданные карточки
function bindLikeEvent(listElement) {
  let likeButton = listElement.querySelector('.card__like-button');

  likeButton.addEventListener('click', () => likeButton.classList.toggle('card__like-button_active'));
}

function bindDeleteEvent(listElement) {
  let deleteButton = listElement.querySelector('.card__delete-button');

  deleteButton.addEventListener('click', () => deleteButton.closest('#card-list-element').remove());
}

function bindOpenPopupEvent(listElement) {
  let cardImage = listElement.querySelector('.card__img');

  cardImage.addEventListener('click', () => {
    openPopup(imagePopup);
    imagePopupImg.src = cardImage.src;
    imagePopupImg.alt = cardImage.alt;
    imagePopupHeading.textContent = cardImage.alt;
  });
}

// открыть попап редактирования профиля
editButton.addEventListener('click', () => {
  openPopup(editProfilePopup);
  editProfileInputName.value = profileName.textContent;
  editProfileInputJob.value = profileJob.textContent;
});

// сохранить изменения и закрыть попап профиля
editProfileForm.addEventListener('submit', saveChanges);

// закрыть попап редактирования профиля
editProfileCloseButton.addEventListener('click', () => closePopup(editProfilePopup));

// открытие попапа для добавления карточек
addButton.addEventListener('click', () => openPopup(addCardPopup));

// закрытие попапа для добавления карточек
addCardCloseButton.addEventListener('click', () => closePopup(addCardPopup));

// закрытие попапа с картинкой
imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));

// добавление карточки в галерею с последующим закрытием попапа
addCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  let cardListElement = cardTemplate.querySelector('#card-list-element').cloneNode(true);
  cardListElement.querySelector('.card__img').src = addCardInputUrl.value;
  cardListElement.querySelector('.card__img').alt = addCardInputName.value;
  cardListElement.querySelector('.card__text').textContent = addCardInputName.value;
  galleryList.prepend(cardListElement);

  addCardInputUrl.value = '';
  addCardInputName.value = '';

  bindLikeEvent(cardListElement);
  bindDeleteEvent(cardListElement);
  bindOpenPopupEvent(cardListElement);
  closePopup(addCardPopup);
});

// открытие попапа с картинокой


// добавление 6-ти базовых карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach((el) => {
  let cardListElement = cardTemplate.querySelector('#card-list-element').cloneNode(true);

  cardListElement.querySelector('.card__img').src = el.link;
  cardListElement.querySelector('.card__img').alt = el.name;
  cardListElement.querySelector('.card__text').textContent = el.name;

  bindLikeEvent(cardListElement);
  bindDeleteEvent(cardListElement);
  bindOpenPopupEvent(cardListElement);
  galleryList.append(cardListElement);
});