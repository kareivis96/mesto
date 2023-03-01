export class UserInfo {
  constructor({ nameSelector, aboutMeSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutMeElement = document.querySelector(aboutMeSelector);
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

  setUserInfo({ name, aboutMe, userId }) {
    this._nameElement.textContent = name;
    this._aboutMeElement.textContent = aboutMe;
    this._userId = userId;
  }
}