class Card {
  constructor (data) {
    this._cardTemplate = document.querySelector(`${data.cardTemplateSelector}`).content;
    this._cardUrl = data.cardUrl;
    this._cardName = data.cardName;
  }


}






const cardTemplate = document.querySelector('#card-template').content;

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


function handlerCardDeleteEvent(evt) {
  evt.currentTarget.closest('#card-list-element').remove();
};


function handlerLikeEvent(evt) {
  evt.currentTarget.classList.toggle('card__like-button_active')
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