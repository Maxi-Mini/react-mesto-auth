import React from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const nameRef = React.useRef();
  const linkRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      title: nameRef.current.value,
      link: linkRef.current.value,
    });
  };
      return(
        <PopupWithForm
        title={"Новое место"}
        name={"popup-add"}
        isOpen={isOpen}
        onClose={onClose}
        buttonText={"Сохранить"}
        onSubmit={handleSubmit}
      >
        <input
          className="popup__input popup__input_type_name"
          type="text"
          minLength="1"
          maxLength="30"
          required
          placeholder="Название"
          name="title"
          id="title"
          ref={nameRef}
        />
        <span className="popup__input-error" id="title-error">
          Ошибка
        </span>
        <input
          className="popup__input popup__input_type_job"
          type="url"
          required
          placeholder="Ссылка на картинку"
          name="link"
          id="link"
          ref={linkRef}
        />
        <span className="popup__input-error" id="link-error">
          Ошибка
        </span>
      </PopupWithForm>
      )

}

export default AddPlacePopup