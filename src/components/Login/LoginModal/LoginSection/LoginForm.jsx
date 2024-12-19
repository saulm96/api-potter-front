import "./login.css";
const LoginForm = () => {
  return (
    <form className="login-form">
      <div className="login-input-container">
        <input type="email" placeholder="Email" id="login-email"></input>
      </div>
      <div className="login-input-container">
        <input type="password" placeholder="Password" id="login-password"></input>
      </div>
      <button type="submit" className="login-button">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;