import { useState } from 'react';
import '../index.css'
import Form from './Form';


function Login({ isLogin }) {

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
    isLogin(email, password)
  }

  return (
    <Form title="Вход" buttonText="Войти" onSubmit={handleSubmit}>
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
          onChange={handlePasswordChange}
        />
        <span className="authorization-error authorization-password-error" />
      </>
    </Form>
  );
}


export default Login;