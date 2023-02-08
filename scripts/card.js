export class Card {
  constructor(data) {
    this._cardTemplate = document.querySelector(`${data.cardTemplateSelector}`).content;
    this._cardUrl = data.cardUrl;
    this._cardName = data.cardName;
    this._imagePopup = data.imagePopupElement;
  }

  _handlerCardDeleteEvent() {
    this._cardListElement.remove();
    this._cardListElement = null;
  }

  _handlerLikeEvent(evt) {
    evt.target.classList.toggle('card__like-button_active');
  }

  _handlerCardImgClick(openImagePopupfunction) {
    this._imagePopupImg = this._imagePopup.querySelector('.image-block__img');
    this._imagePopupHeading = this._imagePopup.querySelector('.image-block__heading');

    this._imagePopupImg.src = this._cardUrl;
    this._imagePopupImg.alt = this._cardName;
    this._imagePopupHeading.textContent = this._cardName;
    openImagePopupfunction(this._imagePopup);
  }

  _setCardEventListener(openImagePopupfunction) {
    this._buttonLike = this._cardListElement.querySelector('.card__like-button');
    this._buttonDelete = this._cardListElement.querySelector('.card__delete-button');
    this._cardImage = this._cardListElement.querySelector('.card__img');

    this._buttonLike.addEventListener('click', (evt) => this._handlerLikeEvent(evt));
    this._buttonDelete.addEventListener('click', (evt) => this._handlerCardDeleteEvent());
    this._cardImage.addEventListener('click', (evt) => this._handlerCardImgClick(openImagePopupfunction));
  }

  createCard(openImagePopupfunction) {
    this._cardListElement = this._cardTemplate.querySelector('#card-list-element').cloneNode(true);
    this._cardListElementImage = this._cardListElement.querySelector('.card__img');
    this._cardListElementText = this._cardListElement.querySelector('.card__text');

    this._cardListElementImage.src = this._cardUrl;
    this._cardListElementImage.alt = this._cardName;
    this._cardListElementText.textContent = this._cardName;

    this._setCardEventListener(openImagePopupfunction);

    return this._cardListElement;
  }
}