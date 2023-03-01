/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r,n,o,i,u){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=n,this._getUserId=r,this._link=this._data.link,this._name=this._data.name,this._likes=this._data.likes,this._ownerId=this._data.owner._id,this._handleCardClick=o,this._handleLikeClickCalback=i,this._handleDeleteClick=u,this._cardTemplate=document.querySelector(e).content,this._card=this._cardTemplate.querySelector("#card-list-element").cloneNode(!0),this._cardImage=this._card.querySelector(".card__img"),this._cardText=this._card.querySelector(".card__text"),this._buttonDelete=this._card.querySelector(".card__delete-button"),this._buttonLike=this._card.querySelector(".card__like-button"),this._likeCounter=this._card.querySelector(".card__like-counter"),this.isLiked=this._data.likes.find((function(t){return t._id==a._getUserId()}))}var r,n;return r=t,(n=[{key:"_handleCardDeleteEvent",value:function(){this._handleDeleteClick()}},{key:"_setDeleteButtonVisibility",value:function(){this._getUserId()!==this._ownerId&&this._buttonDelete.remove()}},{key:"_setLikeState",value:function(t,e){e?(this._buttonLike.classList.add("card__like-button_active"),this._likeCounter.textContent=t.likes.length):(this._buttonLike.classList.remove("card__like-button_active"),this._likeCounter.textContent=t.likes.length)}},{key:"setLikeActive",value:function(t){this._buttonLike.classList.add("card__like-button_active"),this._likeCounter.textContent=t.likes.length,this.isLiked=!0}},{key:"setLikeInactive",value:function(t){this._buttonLike.classList.remove("card__like-button_active"),this._likeCounter.textContent=t.likes.length,this.isLiked=!1}},{key:"_handleLikeClick",value:function(){this._handleLikeClickCalback(this._data._id,this.isLiked)}},{key:"_setCardEventListener",value:function(){var t=this;this._buttonLike.addEventListener("click",this._handleLikeClick.bind(this)),this._buttonDelete.addEventListener("click",this._handleCardDeleteEvent.bind(this)),this._cardImage.addEventListener("click",(function(e){return t._handleCardClick(t._link,t._name)}))}},{key:"createCard",value:function(){return this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardText.textContent=this._name,this._setDeleteButtonVisibility(),this._setCardEventListener(),this._setLikeState(this._data,this.isLiked),this._card}},{key:"removeCard",value:function(){this._card.remove()}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}(),n={errorElementSelector:".popup__error-text",errorElementVisibleClass:"popup__error-text_type_visible",inputElementTypeInvalid:"popup__input_type_invalid",inputSelector:".popup__input",popupSaveButtonSelector:".popup__save-button",popupFormSelector:".popup__form",popupSaveButtonDisabledSelector:"popup__save-button_disabled",popupSelector:".popup",popupOpenedSelector:".popup_opened"};function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var u=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=document.querySelector(r),this._errorElementSelector=e.errorElementSelector,this._errorElementVisibleClass=e.errorElementVisibleClass,this._inputElementTypeInvalid=e.inputElementTypeInvalid,this._inputSelector=e.inputSelector,this._popupSaveButtonSelector=e.popupSaveButtonSelector,this._popupFormSelector=e.popupFormSelector,this._popupSaveButtonDisabledSelector=e.popupSaveButtonDisabledSelector,this._popupSelector=e.popupSelector,this._popupOpenedSelector=e.popupOpenedSelector,this._errorElement=this._formElement.querySelector(this._errorElementSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButton=this._formElement.querySelector(this._popupSaveButtonSelector)}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t,e,r){e.classList.add(this._errorElementVisibleClass),e.textContent=r,t.classList.add(this._inputElementTypeInvalid)}},{key:"_hideInputError",value:function(t,e){e.classList.remove(this._errorElementVisibleClass),e.textContent="",t.classList.remove(this._inputElementTypeInvalid)}},{key:"_isInputElementValid",value:function(t){var e=t.parentElement.querySelector("".concat(this._errorElementSelector));t.validity.valid?this._hideInputError(t,e):this._showInputError(t,e,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._submitButton&&this._hasInvalidInput()?(this._submitButton.classList.add(this._popupSaveButtonDisabledSelector),this._submitButton.setAttribute("disabled",!0)):this._submitButton&&(this._submitButton.classList.remove(this._popupSaveButtonDisabledSelector),this._submitButton.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._toggleButtonState(),t._isInputElementValid(e)}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._closeBtutton=this._popup.querySelector(".close-button"),this._handleOverlayClick=this._hendlerToClosePopupOnClickOverlay.bind(this),this._handleEscClick=this._hendlerToClosePopupOnClickEsc.bind(this),this._handleCloseBtnClick=this.close.bind(this)}var e,r;return e=t,(r=[{key:"_hendlerToClosePopupOnClickOverlay",value:function(t){t.target===t.currentTarget&&this.close()}},{key:"_hendlerToClosePopupOnClickEsc",value:function(t){"Escape"===t.key&&this.close()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this.removeEventListeners()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),this.setEventListeners()}},{key:"setEventListeners",value:function(){document.addEventListener("keydown",this._handleEscClick),this._popup.addEventListener("mousedown",this._handleOverlayClick),this._closeBtutton.addEventListener("click",this._handleCloseBtnClick)}},{key:"removeEventListeners",value:function(){document.removeEventListener("keydown",this._handleEscClick),this._popup.removeEventListener("mousedown",this._handleOverlayClick),this._closeBtutton.removeEventListener("click",this._handleCloseBtnClick)}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},p.apply(this,arguments)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(n);if(o){var r=y(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImg=e._popup.querySelector(".image-block__img"),e._popupText=e._popup.querySelector(".image-block__heading"),e}return e=u,(r=[{key:"open",value:function(t,e){this._popupImg.src=t,this._popupImg.alt=e,this._popupText.textContent=e,p(y(u.prototype),"open",this).call(this)}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(l);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw i}}}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},g.apply(this,arguments)}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(n);if(o){var r=w(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return k(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._handleSubmitForm=e,r._form=r._popup.querySelector(".popup__form"),r._inputs=r._popup.querySelectorAll(".popup__input"),r._submitButton=r._popup.querySelector(".popup__save-button"),r._submitButtonDefaultText=r._submitButton.textContent,r._handleFormSubmit=r.onFormSubmit.bind(k(r)),r}return e=u,(r=[{key:"_getInputValues",value:function(){var t,e={},r=m(this._inputs);try{for(r.s();!(t=r.n()).done;){var n=t.value;e[n.name]=n.value}}catch(t){r.e(t)}finally{r.f()}return e}},{key:"_addPreloader",value:function(){this._submitButton.textContent="Сохранение..."}},{key:"removePreloader",value:function(){this._submitButton.textContent=this._submitButtonDefaultText}},{key:"setDefaultInputsValues",value:function(t){var e,r=m(this._inputs);try{for(r.s();!(e=r.n()).done;){var n=e.value;n.value=t[n.name]}}catch(t){r.e(t)}finally{r.f()}}},{key:"onFormSubmit",value:function(t){t.preventDefault(),this._addPreloader(),this._handleSubmitForm(this._getInputValues()),this.close()}},{key:"setEventListeners",value:function(){g(w(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleFormSubmit)}},{key:"removeEventListeners",value:function(){g(w(u.prototype),"removeEventListeners",this).call(this),this._form.removeEventListener("submit",this._handleFormSubmit)}},{key:"close",value:function(){g(w(u.prototype),"close",this).call(this),this._form.reset()}}])&&_(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(l);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}var j=function(){function t(e){var r=e.nameSelector,n=e.aboutMeSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=document.querySelector(r),this._aboutMeElement=document.querySelector(n),this._userId=""}var e,r;return e=t,r=[{key:"getUserId",value:function(){return this._userId}},{key:"getUserInfo",value:function(){var t={};return t.formName=this._nameElement.textContent,t.formJob=this._aboutMeElement.textContent,t}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.aboutMe,n=t.userId;this._nameElement.textContent=e,this._aboutMeElement.textContent=r,this._userId=n}}],r&&L(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function C(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===P(o)?o:String(o)),n)}var o}var I=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t,e){var r=this;t.forEach((function(t){r._renderer(t,e)}))}}])&&C(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function T(){T=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,u=Object.create(i.prototype),a=new O(o||[]);return n(u,"_invoke",{value:S(t,r,a)}),u}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function p(){}function h(){}function y(){}var v={};c(v,i,(function(){return this}));var d=Object.getPrototypeOf,m=d&&d(d(L([])));m&&m!==e&&r.call(m,i)&&(v=m);var b=y.prototype=p.prototype=Object.create(v);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function o(n,i,u,a){var c=s(t[n],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==x(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,u,a)}),(function(t){o("throw",t,u,a)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,a)}))}a(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var a=k(u,r);if(a){if(a===f)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=y,n(b,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:h,configurable:!0}),h.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(g.prototype),c(g.prototype,u,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var u=new g(l(e,r,n,o),i);return t.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},_(b),c(b,a,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return u.type="throw",u.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function B(t,e,r,n,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,o)}function D(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===x(o)?o:String(o)),n)}var o}var q=function(){function t(e){var r=e.url,n=e.token;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=r,this._token=n}var e,r,n,o;return e=t,r=[{key:"_fetch",value:(n=T().mark((function t(e,r,n){var o;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=fetch(this._url+e,{method:r,headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка запроса, код: ".concat(t.status))})),t.abrupt("return",o);case 2:case"end":return t.stop()}}),t,this)})),o=function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function u(t){B(i,r,o,u,a,"next",t)}function a(t){B(i,r,o,u,a,"throw",t)}u(void 0)}))},function(t,e,r){return o.apply(this,arguments)})},{key:"getUserData",value:function(){return this._fetch("/users/me","GET")}},{key:"getStartedCardsPack",value:function(){return this._fetch("/cards","GET")}},{key:"editProfile",value:function(t){var e=t.name,r=t.about;return this._fetch("/users/me","PATCH",{name:e,about:r})}},{key:"addNewCard",value:function(t){var e=t.name,r=t.link;return this._fetch("/cards","POST",{name:e,link:r})}},{key:"editAvatar",value:function(t){return this._fetch("/users/me/avatar","PATCH",t)}},{key:"removeCard",value:function(t){return this._fetch("/cards/".concat(t),"DELETE")}},{key:"setLike",value:function(t){return this._fetch("/cards/".concat(t,"/likes"),"PUT")}},{key:"removeLike",value:function(t){return this._fetch("/cards/".concat(t,"/likes"),"DELETE")}}],r&&D(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function V(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){U(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function U(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==A(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===A(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var N=document.querySelector(".profile__add-button"),M=document.querySelector(".profile__edit-button"),G=document.querySelector(".profile__avatar-container"),J=document.querySelector(".profile__avatar"),H=new v("#image-popup"),Y=new u(n,"#edit-profile-popup"),$=new u(n,"#add-card-popup"),z=new u(n,"#change-avatar-popup"),K=new q({url:"https://mesto.nomoreparties.co/v1/cohort-60",token:"0de5ee20-cdc3-41ba-9a09-6a93d92b63aa"}),Q=new j({nameSelector:".profile__heading",aboutMeSelector:".profile__paragraph"}),W=new E("#change-avatar-popup",(function(t){K.editAvatar(t).then((function(t){J.src=t.avatar})).catch((function(t){return console.log("Ошибка: "+t)})).finally((function(){return W.removePreloader()}))}));G.onclick=function(){return W.open()};var X=new E("#edit-profile-popup",(function(t){K.editProfile({name:t.formName,about:t.formJob}).then((function(t){Q.setUserInfo({name:t.name,aboutMe:t.about})})).catch((function(t){return console.log("Ошибка: "+t)})).finally((function(){return X.removePreloader()}))})),Z=function(t,e){H.open(t,e)},tt=new I((function(t){var e=new r("#card-template",(function(){return Q.getUserId()}),t,Z,(function(t,r){r?K.removeLike(t).then((function(t){e.setLikeInactive(t)})).catch((function(t){return console.log("Ошибка: "+t)})):K.setLike(t).then((function(t){e.setLikeActive(t)})).catch((function(t){return console.log("Ошибка: "+t)}))}),(function(){new E("#confirm-delete-popup",(function(){K.removeCard(t._id).then((function(t){e.removeCard()})).catch((function(t){return console.log("Ошибка: "+t)}))})).open()}));tt.addItem(e.createCard())}),".gallery__list"),et=new E("#add-card-popup",(function(t){var e=t.addFormUrl,r=t.addFormName;K.addNewCard({name:r,link:e}).then((function(t){tt.renderItems([V({},t)])})).catch((function(t){return console.log("Ошибка: "+t)})).finally((function(){return et.removePreloader()}))}));Promise.all([K.getUserData(),K.getStartedCardsPack()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return R(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];Q.setUserInfo({name:o.name,aboutMe:o.about,userId:o._id}),J.src=o.avatar,tt.renderItems(i.reverse())})).catch((function(t){return console.log("Ошибка: "+t)})),N.addEventListener("click",(function(t){return et.open()})),M.addEventListener("click",(function(t){X.setDefaultInputsValues(Q.getUserInfo()),X.open()})),Y.enableValidation(),$.enableValidation(),z.enableValidation()})();