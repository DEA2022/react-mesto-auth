import '../index.css'
import Auth from './Auth';


function Login() {

  return (
    <Auth title="Вход" buttonText="Войти" >
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
        />
        <span className="authorization-error authorization-password-error" />
      </>
    </Auth>
  );
}


export default Login;