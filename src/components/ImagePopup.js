function ImagePopup({card, onClose}){
    return(
        <section className={card.link ? "popup popup_type_photo popup_opened" : "popup popup_type_photo"} id="popup-photo"> 
        <div className="popup__container popup__container_type_photo">
            <button className="popup__exit-button" onClick={onClose} type="button" aria-label="закрыть попап"></button>
            <img className="popup__photo" src={card.link} alt={card.name}/>
            <h2 className="popup__caption">{card.name}</h2>
        </div> 
    </section>
    )
}

export default ImagePopup