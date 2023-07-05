import logo from '../images/logo.svg'
import '../index.css'


function Header({ loggedIn, email, isLogout }) {
  return (
    <header className="header page__header">
      <img className="header__logo" src={logo} alt="Место - Россия" />

    </header>
  );
}

export default Header;