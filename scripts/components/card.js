import { PopupWithImage } from "./PopupWithImage.js";

export class Card {
  constructor(data, handleCardClick) {
    this._cardTemplate = document.querySelector(`${data.cardTemplateSelector}`).content;
    this._cardUrl = data.cardUrl;
    this._cardName = data.cardName;
    this._handleCardClick = handleCardClick;
  }

  _handlerCardDeleteEvent() {
    this._cardListElement.remove();
    this._cardListElement = null;
  }

  _handlerLikeEvent(evt) {
    evt.target.classList.toggle('card__like-button_active');
  }

  _setCardEventListener() {
    this._buttonLike = this._cardListElement.querySelector('.card__like-button');
    this._buttonDelete = this._cardListElement.querySelector('.card__delete-button');
    this._cardImage = this._cardListElement.querySelector('.card__img');

    this._buttonLike.addEventListener('click', (evt) => this._handlerLikeEvent(evt));
    this._buttonDelete.addEventListener('click', (evt) => this._handlerCardDeleteEvent());
    this._cardImage.addEventListener('click', this._handleCardClick);
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