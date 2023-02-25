export class UserInfo {
  constructor({ nameSelector, aboutMeSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutMeElement = document.querySelector(aboutMeSelector);
  }

  getUserInfo() {
    const userInfo = {}
    userInfo.formName = this._nameElement.textContent;
    userInfo.formJob = this._aboutMeElement.textContent;
    return userInfo;
  }

  setUserInfo({ name, aboutMe }) {
    this._nameElement.textContent = name;
    this._aboutMeElement.textContent = aboutMe;
  }
}