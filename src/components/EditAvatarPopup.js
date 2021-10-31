import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}){
    const avatarRef = React.useRef();
    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
      } 

      return (
        <PopupWithForm
        title={"Обновить аватар"}
        name={"avatar-update"}
        isOpen={isOpen}
        onClose={onClose}
        buttonText={"Сохранить"}
        onSubmit={handleSubmit}
      >
        <input
        ref={avatarRef}
          className="popup__input popup__input_type_avatar"
          type="url"
          required
          placeholder="Ссылка на картинку"
          name="avatar"
          id="avatar"
        />
        <span className="popup__input-error" id="avatar-error">
          Ошибка
        </span>
      </PopupWithForm>
      )

}

export default EditAvatarPopup