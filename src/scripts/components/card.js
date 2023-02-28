export class Card {
  constructor(cardTemplateSelector, data, handleCardClick, handleLikeClick) {
    this._data = data;
    this._link = this._data.link;
    this._name = this._data.name;
    this._likes = this._data.likes;
    this.userId = this._data._id;
    this._ownerId = this._data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._cardTemplate = document.querySelector(cardTemplateSelector).content;
    this._card = this._cardTemplate.querySelector('#card-list-element').cloneNode(true);
    this._cardImage = this._card.querySelector('.card__img');
    this._cardText = this._card.querySelector('.card__text');
    this._buttonDelete = this._card.querySelector('.card__delete-button');
    this._buttonLike = this._card.querySelector('.card__like-button');
    this._likeCounter = this._card.querySelector('.card__like-counter');
    this.isLike = false;
  }

  _handlerCardDeleteEvent() {
    this._card.remove();
    this._card = null;
  }

  setLikeNumber(currentLikes) {
    this._likeCounter.textContent = currentLikes;
  }

  seLikeActive() {

  }

  setLikeInactive() {
    
  }

  _handlerLikeEvent() {
    this._buttonLike.classList.toggle('card__like-button_active');
    this._handleLikeClick(this.isCardLiked.bind(this), this.userId);
    this.setLikeNumber();
    console.log(this._likes);
  }

  _setCardEventListener() {
    this._buttonLike.addEventListener('click', this._handlerLikeEvent.bind(this));
    this._buttonDelete.addEventListener('click', (evt) => this._handlerCardDeleteEvent());
    this._cardImage.addEventListener('click', (evt) => this._handleCardClick(this._link, this._name));
    this._cardImage.addEventListener('click', (evt) => this._handleCardClick(this._link, this._name));
  }

  createCard() {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardText.textContent = this._name;
    
    this.setLikeNumber();
    this._setCardEventListener();

    return this._card;
  }
}