export class Card {
  constructor(data) {
    this._cardTemplate = document.querySelector(`${data.cardTemplateSelector}`).content;
    this._cardUrl = data.cardUrl;
    this._cardName = data.cardName;
    this._imagePopup = data.imagePopupElement;
  }

  _handlerCardDeleteEvent(evt) {
    evt.target.closest('#card-list-element').remove();
  }

  _handlerLikeEvent(evt) {
    evt.target.classList.toggle('card__like-button_active');
  }

  _handlerCardImgClick(evt) {
    this._imagePopupImg = document.querySelector('.image-block__img');
    this._imagePopupHeading = document.querySelector('.image-block__heading');

    this._imagePopupImg.src = this._cardUrl;
    this._imagePopupImg.alt = this._cardName;
    this._imagePopupHeading.textContent = this._cardName;
  }

  _setCardEventListener() {
    this._buttonLike = this._cardListElement.querySelector('.card__like-button');
    this._buttonDelete = this._cardListElement.querySelector('.card__delete-button');
    this._cardImage = this._cardListElement.querySelector('.card__img');

    this._buttonLike.addEventListener('click', this._handlerLikeEvent);
    this._buttonDelete.addEventListener('click', this._handlerCardDeleteEvent);
    this._cardImage.addEventListener('click', this._handlerCardImgClick);
  }

  createCard() {
    this._cardListElement = this._cardTemplate.querySelector('#card-list-element').cloneNode(true);
    this._cardListElementImage = this._cardListElement.querySelector('.card__img');
    this._cardListElementText = this._cardListElement.querySelector('.card__text');

    this._cardListElementImage.src = this._cardUrl;
    this._cardListElementImage.alt = this._cardName;
    this._cardListElementText.textContent = this._cardName;

    this._setCardEventListener();

    return this._cardListElement;
  }
}