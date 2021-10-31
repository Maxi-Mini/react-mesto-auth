export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  };

  export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ];
  
  // edit popup group
  export const popupEdit = document.querySelector("#popup-edit"); // edit popup
  export const openEditProfilePopupBtn = document.querySelector(".profile__edit-button"); // edit button
  // const closePopup = popupEdit.querySelector(".popup__exit-button"); // edit popup close button
  export const profileForm = popupEdit.querySelector(".popup__container"); // edit popup container
  export const nameInput = profileForm.querySelector('input[name="name"]'); // input name
  export const jobInput = profileForm.querySelector('input[name="description"]'); // input description
  export const profileName = document.querySelector(".profile__name");
  export const profileCaption = document.querySelector(".profile__caption");
  export const profileAvatar = document.querySelector('.profile__avatar');
  // const saveProfileBtn = profileForm.querySelector(".popup__save-button"); // edit popup save button
  export const editCardForm = popupEdit.querySelector('.popup__form'); // edit form
  // add popup group
  export const popupAdd = document.querySelector("#popup-add"); // add popup
  export const addCardForm = popupAdd.querySelector('.popup__form'); // add form
  export const openPopupAdd = document.querySelector(".profile__add-button"); // add button
  // const closePopupAdd = popupAdd.querySelector(".popup__exit-button"); // add popup close button
  export const itemTemplate = document.querySelector("#template").content; // template.content
  export const elements = document.querySelector(".elements"); // div elements
  // const addCardBtn = document.querySelector(".popup__save-button"); // add popup save button
  // const profileFormAdd = popupAdd.querySelector(".popup__container"); // add popup container
  // const titleInput = profileFormAdd.querySelector('input[name="title"]'); // input title
  // const linkInput = profileFormAdd.querySelector('input[name="link"]'); // input link
  // photo popup group
  export const popupPhoto = document.querySelector("#popup-photo"); // photo popup
  // const closePopupPhoto = popupPhoto.querySelector(".popup__exit-button"); // photo popup exit button
  export const imgPopupPhoto = popupPhoto.querySelector(".popup__photo"); // photo popup image
  export const captionPopupPhoto = popupPhoto.querySelector(".popup__caption"); // photo popup caption
  export const allPopup = document.querySelectorAll('.popup')
  // const popups = document.querySelectorAll('.popup'); // section popup
  export const popupDelete = document.querySelector('#popup-confirmation'); //del popup
  export const popupAvatar = document.querySelector('#avatar-update');//avaatar popup
  export const avatarCardForm = popupAvatar.querySelector('.popup__form');// avatar form
  export const userId = null;