import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg'
import '../index.css'


function Header({ loggedOut, userEmail, loggedIn }) {
  const { pathname } = useLocation()

  return (
    <header className="header page__header">
      <img className="header__logo" src={logo} alt="Место - Россия" />
      {loggedIn
        ? <div className="header__user">
          <p className="header__user-email">email: {userEmail}</p>
          <Link className="header__link" to='/sign-in' onClick={loggedOut}>Выйти</Link>
        </div>
        : pathname === "/sign-up"
          ? <Link to='/sign-in' className="header__link">Войти</Link>
          : <Link to='/sign-up' className="header__link">Регистрация</Link>
      }


    </header >
  );
}

export default Header;