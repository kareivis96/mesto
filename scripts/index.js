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
const cardTemplate = document.querySelector('#card-template').content;

const imagePopup = document.querySelector('#image-popup');
const imagePopupImg = document.querySelector('.image-block__img');
const imagePopupHeading = document.querySelector('.image-block__heading');
const imagePopupCloseButton = document.querySelector('#image-block-close-button');

const popupList = Array.from(document.querySelectorAll('.popup'));



// функция создает карточку на основе template
const createCard = createAnyCardTemplate(cardTemplate);

function createAnyCardTemplate(cardSample) {
  return function createAnyCard(cardDataObj) {
    const cardListElement = cardSample.querySelector('#card-list-element').cloneNode(true);
    const cardListElementImage = cardListElement.querySelector('.card__img');
    const cardListElementText = cardListElement.querySelector('.card__text');

    cardListElementImage.src = cardDataObj.cardUrl;
    cardListElementImage.alt = cardDataObj.cardName;
    cardListElementText.textContent = cardDataObj.cardName;

    setCardEventListener(cardListElement);

    return cardListElement;
  }
}



// функции обработчики для слушателей
function handlerLikeEvent(evt) {
  evt.currentTarget.classList.toggle('card__like-button_active')
};
function handlerCardDeleteEvent(evt) {
  evt.currentTarget.closest('#card-list-element').remove();
};
function handlerOpenImagePopup(evt) {
  imagePopupImg.src = evt.currentTarget.src;
  imagePopupImg.alt = evt.currentTarget.alt;
  imagePopupHeading.textContent = evt.currentTarget.alt;
  openPopup(imagePopup);
};

// функции вешают слушатели событий на созданные карточки
function setCardEventListener(listElement) {
  const buttonLike = listElement.querySelector('.card__like-button');
  const buttonDelete = listElement.querySelector('.card__delete-button');
  const cardImage = listElement.querySelector('.card__img');

  buttonLike.addEventListener('click', handlerLikeEvent);
  buttonDelete.addEventListener('click', handlerCardDeleteEvent);
  cardImage.addEventListener('click', handlerOpenImagePopup);
};



// функция закрытия попапа по нажатию на оверлей
function hendlerToClosePopupOnClickOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    evt.currentTarget.classList.remove('popup_opened');
  }
};
// функция закрытия попапа по нажатию на Esc
function hendlerToClosePopupOnClickEsc(evt) {
  const popupToClose = document.querySelector('.popup_opened');

  if (evt.key === 'Escape') {
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



// СЛУШАТЕЛИ ДЛЯ ПРОФИЛЯ
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



// СЛУШАТЕЛИ ДЛЯ КАРТОЧЕК
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

  galleryList.prepend(createCard({ cardUrl: inputUrlCreateCard.value, cardName: inputNameCreateCard.value }));
  formCreateCard.reset();
  closePopup(popupToCreateCard);
});



// добавление 6-ти базовых карточек
initialCards.forEach((el) => {
  galleryList.append(createCard({ cardUrl: el.link, cardName: el.name }));
});



// закрытие попапа с картинкой
imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));