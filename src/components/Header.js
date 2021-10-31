import headerLogo from "../images/header_logo.svg";
import { Route, Switch, Link } from "react-router-dom";

function Header({ handleLogout, email, isMenuOpen }) {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="логотип место" />
      <Switch>
        <Route exact path="/">
          <div className="header__info">
            <span className="header__email">{email}</span>
            <Link
              to="/sign-in"
              onClick={handleLogout}
              className="button header__link"
            >
              Выйти
            </Link>
          </div>
          <button
            className={
              isMenuOpen
                ? "header__menu header__menu_type_opened"
                : "header__menu header__menu_type_closed"
            }
          >
            <span />
          </button>
        </Route>

        <Route path="/sign-in">
          <Link to="/sign-up" className="button header__link">
            Регистрация
          </Link>
        </Route>

        <Route path="/sign-up">
          <Link to="/sign-in" className="button header__link">
            Войти
          </Link>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
