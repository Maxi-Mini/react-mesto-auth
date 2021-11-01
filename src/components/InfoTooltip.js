import success from "../images/success.svg";
import error from "../images/error.svg";

function InfoTooltip(props) {
  const messageIcon = props.authStatus ? success : error;
  const messageText = props.authStatus
    ? "Вы успешно зарегистрировались!"
    : "Что-то пошло не так! Попробуйте еще раз.";

  return (
    <section className={props.isOpen ? "popup popup_opened" : "popup"}>
      <div className="popup__container popup__container_type_input popup__container_type_signature">
      <button
          onClick={props.onClose}
          className="button popup__exit-button"
          type="button"
          aria-label="Закрыть"
        ></button>
        <img src={messageIcon} alt="иконка" className="popup__icon" />
        <h2 className="popup__signature">{messageText}</h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
