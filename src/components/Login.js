import { useState } from "react";

export const Login=({ handleLogin }) =>{
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
    handleLogin(data);
  }

  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
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
          Войти
        </button>
      </form>
    </div>
  );
}
