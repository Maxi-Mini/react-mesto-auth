import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}){

    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    function handleClick() {
        onCardClick(card);
      }

    function handleLikeClick(){
        onCardLike(card);
    }

    function handleDeleteClick(){
        onCardDelete(card);
    }

    return(
        <div className="element">
            <button className="button element__delete-button" onClick={handleDeleteClick} style={isOwn ? {display: "block"} : {display: "none"}} aria-label="Удалить" type="button"></button>
            <img className="element__image" onClick={handleClick} src={card.link} alt={card.name}/>
            <div className="element__info">
                <h3 className="element__title">{card.name}</h3>
                <div className="element__like">
                    <button className={isLiked ? "button element__like-button element__like-button_active" : "button element__like-button"} onClick={handleLikeClick} type="button" aria-label="кнопка лайк"></button>
                    <span className="element__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </div>
        
    )
}

export default Card