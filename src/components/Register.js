import { useState } from "react";
import Auth from "./Auth";
import { Link } from "react-router-dom";



function Register({ isRegister }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    isRegister(email, password)
  }


  return (
    <>
      <Auth title="Регистрация" buttonText="Зарегистрироваться" onSubmit={handleSubmit}>
        <>
          <input
            className="authorization__field"
            id="authorization-email"
            type="email"
            name="email"
            required
            placeholder="Email"
            minLength={8}
            maxLength={30}
            value={email || ''}
            onChange={handleEmailChange}

          />
          <span className="authorization-error authorization-email-error" />
          <input
            className="authorization__field"
            id="authorization-password"
            type="password"
            name="password"
            required
            placeholder="Пароль"
            minLength={6}
            maxLength={18}
            value={password || ''}
            onChange={handlePasswordChange}
          />
          <span className="authorization-error authorization-password-error" />
        </>
      </Auth>
      <p className="authorization-question">Уже зарегистрированы?{' '}
        <Link
          to="/sign-in"
          className="authorization-link">
          Войти
        </Link>
      </p>
    </>
  );
}


export default Register;