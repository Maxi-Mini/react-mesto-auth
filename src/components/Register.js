import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Register = ({ handleRegister, isDataSet }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = data;
    handleRegister({email, password});
  }

  // useEffect(() => {
  //   if (isDataSet) {
  //     setData({ email: "", password: "" });
  //   }
  // }, [isDataSet]);

  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form onSubmit={handleSubmit} className="auth__form">
        <input
          onChange={handleChange}
          className="auth__input"
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          value={data.email}
          required
        />
        <input
          onChange={handleChange}
          className="auth__input"
          id="password"
          name="password"
          placeholder="Пароль"
          type="password"
          value={data.password}
          required
        />
        <button className="auth__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <Link to="/sign-in" className="auth__link">
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
};
