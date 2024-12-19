import React from "react";

import LoginForm from "./LoginSection/LoginForm";
import CreateAcountForm from "./RegisterSection/CreateAcountForm";

import "./modal.css";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleLoginButtonClick = (button) => {
    const loginForm = document.querySelector(".modal-login-form");
    const createAccountForm = document.querySelector(".create-account-form");
    const buttons = document.querySelectorAll(".modal-login-buttons p");

    buttons.forEach((button) => {
      if (
        button !== event.target &&
        button.classList.contains("login-section-active")
      ) {
        button.classList.remove("login-section-active");
      }
    });
    event.target.classList.add("login-section-active");

    if (event.target.innerText === "Sign in") {
      loginForm.style.display = "block";
      createAccountForm.style.display = "none";
    } else if (event.target.innerText === "Create account") {
      loginForm.style.display = "none";
      createAccountForm.style.display = "block";
    }
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <img className="modal-img" src="../../assets/modal-bg-img.png" />
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <h2>Welcome to Olivanders</h2>
          <p>Sign in or create a new account</p>
        </div>

        <div className="modal-body">
          <div className="modal-login-buttons">
            <p
              onClick={(event) => {
                handleLoginButtonClick(event);
              }}
              className="login-section-active"
            >
              Sign in
            </p>

            <p
              onClick={(event) => {
                handleLoginButtonClick(event);
              }}
            >
              Create account
            </p>
          </div>

          <div className="modal-login-form">
            <LoginForm />
          </div>

          <div className="create-account-form">
            <CreateAcountForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
