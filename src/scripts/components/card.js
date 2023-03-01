export class Card {
  constructor(cardTemplateSelector, userId, data, handleCardClick, handleLikeClick, handleDeleteClick) {
    this._data = data;
    this.userId = userId;
    this._link = this._data.link;
    this._name = this._data.name;
    this._likes = this._data.likes;
    this._ownerId = this._data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._cardTemplate = document.querySelector(cardTemplateSelector).content;
    this._card = this._cardTemplate.querySelector('#card-list-element').cloneNode(true);
    this._cardImage = this._card.querySelector('.card__img');
    this._cardText = this._card.querySelector('.card__text');
    this._buttonDelete = this._card.querySelector('.card__delete-button');
    this._buttonLike = this._card.querySelector('.card__like-button');
    this._likeCounter = this._card.querySelector('.card__like-counter');
    this.isLiked = this._data.likes.find(el => el._id == this.userId);
  }

  _handlerCardDeleteEvent() {
    this._handleDeleteClick();
  }

  _setDeleteButtonVisibility() {
    if (this.userId !== this._ownerId) this._buttonDelete.remove();
  }

  _setLikeState(data, isLiked) {
    if (isLiked) {
      this._buttonLike.classList.add('card__like-button_active');
      this._likeCounter.textContent = data.likes.length;
    } else {
      this._buttonLike.classList.remove('card__like-button_active');
      this._likeCounter.textContent = data.likes.length;
    }
  }

  setLikeActive(data) {
    this._buttonLike.classList.add('card__like-button_active');
    this._likeCounter.textContent = data.likes.length;
    this.isLiked= true;
  }

  setLikeInactive(data) {
    this._buttonLike.classList.remove('card__like-button_active');
    this._likeCounter.textContent = data.likes.length;
    this.isLiked= false;
  }

  _handlerLikeClick() {
    this._handleLikeClick(this._data._id, this.isLiked);
  }

  _setCardEventListener() {
    this._buttonLike.addEventListener('click', this._handlerLikeClick.bind(this));
    this._buttonDelete.addEventListener('click', this._handlerCardDeleteEvent.bind(this));
    this._cardImage.addEventListener('click', (evt) => this._handleCardClick(this._link, this._name));
  }

  createCard() {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardText.textContent = this._name;
    this._setDeleteButtonVisibility();
    this._setCardEventListener();
    this._setLikeState(this._data, this.isLiked);

    return this._card;
  }
  removeCard() {
    this._card.remove();
  }
}