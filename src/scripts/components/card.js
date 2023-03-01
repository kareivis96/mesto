export class Card {
  constructor(cardTemplateSelector, getUserId, data, handleCardClick, handleLikeClickCalback, handleDeleteClick) {
    this._data = data;
    this._getUserId = getUserId;
    this._link = this._data.link;
    this._name = this._data.name;
    this._likes = this._data.likes;
    this._ownerId = this._data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleLikeClickCalback = handleLikeClickCalback;
    this._handleDeleteClick = handleDeleteClick;
    this._cardTemplate = document.querySelector(cardTemplateSelector).content;
    this._card = this._cardTemplate.querySelector('#card-list-element').cloneNode(true);
    this._cardImage = this._card.querySelector('.card__img');
    this._cardText = this._card.querySelector('.card__text');
    this._buttonDelete = this._card.querySelector('.card__delete-button');
    this._buttonLike = this._card.querySelector('.card__like-button');
    this._likeCounter = this._card.querySelector('.card__like-counter');
    this.isLiked = this._data.likes.find(el => el._id == this._getUserId());
  }

  _handleCardDeleteEvent() {
    this._handleDeleteClick();
  }

  _setDeleteButtonVisibility() {
    if (this._getUserId() !== this._ownerId) this._buttonDelete.remove();
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
    this.isLiked = true;
  }

  setLikeInactive(data) {
    this._buttonLike.classList.remove('card__like-button_active');
    this._likeCounter.textContent = data.likes.length;
    this.isLiked = false;
  }

  _handleLikeClick() {
    this._handleLikeClickCalback(this._data._id, this.isLiked);
  }

  _setCardEventListener() {
    this._buttonLike.addEventListener('click', this._handleLikeClick.bind(this));
    this._buttonDelete.addEventListener('click', this._handleCardDeleteEvent.bind(this));
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