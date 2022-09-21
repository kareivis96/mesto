let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__container');
let inputName = document.querySelector('.popup__name');
let inputJob = document.querySelector('.popup__job');
let profileName = document.querySelector('.profile__heading');
let profileJob = document.querySelector('.profile__paragraph');

function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
};

function closePopup() {
  popup.classList.remove('popup_opened');
};

function saveChanges(evt) {
  evt.preventDefault();
  
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
form.addEventListener('submit', saveChanges);