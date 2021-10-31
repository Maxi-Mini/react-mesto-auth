import React, { useState, useEffect} from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const currentUser = React.useContext(CurrentUserContext);

    function handleChangeName(e) {
        setName(e.target.value);
      }

      function handleChangeDescription(e) {
        setDescription(e.target.value);
      }

      function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
          name,
          description: description,
        });
      }

      useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser, isOpen]);

    return (
        <PopupWithForm
          title={"Редактировать профиль"}
          name={"popup-edit"}
          isOpen={isOpen}
          onClose={onClose}
          buttonText={"Сохранить"}
          onSubmit={handleSubmit}
        >
          <input
          value={name} onChange={handleChangeName}
            className="popup__input popup__input_type_name"
            type="text"
            minLength="2"
            maxLength="40"
            required
            placeholder="Имя"
            name="name"
            id="name"
          />
          <span className="popup__input-error" id="name-error">
            Ошибка
          </span>
          <input
          value={description} onChange={handleChangeDescription}
            className="popup__input popup__input_type_job"
            type="text"
            minLength="2"
            maxLength="200"
            required
            placeholder="О себе"
            name="description"
            id="description"
          />
          <span className="popup__input-error" id="description-error">
            Ошибка
          </span>
        </PopupWithForm>
    )
}

export default EditProfilePopup