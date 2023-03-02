export class UserInfo {
  constructor({ nameSelector, aboutMeSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutMeElement = document.querySelector(aboutMeSelector);
    this._avatarElement = document.querySelector(avatarSelector);
    this._userId = '';
  }

  getUserId() {
    return this._userId;
  }

  getUserInfo() {
    const userInfo = {}
    userInfo.formName = this._nameElement.textContent;
    userInfo.formJob = this._aboutMeElement.textContent;
    return userInfo;
  }

  setAvatar(avatarUrl) {
    this._avatarElement.src = avatarUrl;
  }

  setUserInfo({ name, aboutMe, userId }) {
    this._nameElement.textContent = name;
    this._aboutMeElement.textContent = aboutMe;
    this._userId = userId;
  }
}