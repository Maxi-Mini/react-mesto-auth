function PopupWithForm({
  title,
  name,
  children,
  isOpen,
  onClose,
  buttonText,
  onSubmit,
}) {
  return (
    <section className={isOpen ? "popup popup_opened" : "popup"} id={name}>
      <div className="popup__container popup__container_type_input">
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          onSubmit={onSubmit}
          action="#"
          name={name}
        >
          {children}
          <button
            className="button popup__save-button"
            type="submit"
            aria-label={buttonText}
          >
            {buttonText}
          </button>
        </form>
        <button
          onClick={onClose}
          className="popup__exit-button"
          type="button"
          aria-label="Закрыть"
        ></button>
      </div>
    </section>
  );
}

export default PopupWithForm;
