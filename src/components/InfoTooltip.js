import succes from "../images/success.svg";
import error from "../images/error.svg";
// Прошу прощения, но я не успел исправить....
export const InfoToolTip = (isOpen, onClose, title, icon) => {
  return (
    <section
      className={
        isOpen
          ? "popup"
          : "popup"
      }
    >
      <div className="popup__container popup__container_type_input popup__container_type_signature">
        <img className="popup__icon" src={icon ? succes : error} alt="иконка" />
        <h2 className="popup__signature">{title}</h2>
        <button
          onClick={onClose}
          className="button popup__exit-button"
          type="button"
          aria-label="Закрыть"
        ></button>
      </div>
    </section>
  );
};

