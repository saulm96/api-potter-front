//Create a modal
import React from "react";
import "./modal.css";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
    const handleBLoginButtonClick = (button) => {
        const buttons = document.querySelectorAll('.modal-login-buttons p');
        buttons.forEach((button) => {
            if(button !== event.target && button.classList.contains('login-section-active')) {
                button.classList.remove('login-section-active');
            }});
            event.target.classList.add('login-section-active');
    }
  return (
    <div className="modal">
      <div className="modal-content">

        <div className="modal-header">
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <h2>Welcome to Olivanders</h2>
          <p>Sign in or create a new account</p>
        </div>

        <div className="modal-body">
          <div className="modal-login-buttons">
            <p onClick={(event) => {handleBLoginButtonClick(event)}}>Sign in</p>
            <p onClick={(event) => {handleBLoginButtonClick(event)}}>Create account</p>
          </div>

          <div className="modal-login-form">
            <form>
                <div className="input-container">
              <input type="email" placeholder="Email"></input>
                </div>
                <div className="input-container">
              <input type="password" placeholder="Password"></input>
                </div>
              <button type="submit" className="login-button">Sign in</button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LoginModal;
