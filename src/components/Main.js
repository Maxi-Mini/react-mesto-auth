import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick, handleCardClick, cards, onCardLike, onCardDelete}){
  const currentUser = React.useContext(CurrentUserContext);
    
  return(
        <main className="content">
        <section className="profile">
            <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} onClick={handleEditAvatarClick}></div>
            <div className="profile__bio">
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <p className="profile__caption">{currentUser.about}</p>
                </div>
            <button className="profile__edit-button" type="button" aria-label="кнопка редактирования профиля" onClick={handleEditProfileClick}></button>
            </div>
            <button className="profile__add-button" type="button" aria-label="кнопка добавления контента" onClick={handleAddPlaceClick}></button>
        </section>
        <section className="elements">
             {cards.map((card) => { return (<Card key={card._id} card={card} onCardClick={handleCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete}/>)})}
        </section>
        </main>
    )
}

export default Main