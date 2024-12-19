import { useState } from "react";

import LoginModal from "../LoginModal/Modal"

import "./login-button.css";

export default function Login() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    
  
    const openModal = () => {
      setIsLoginModalOpen(true);
    };
    const closeModal = () => {
      setIsLoginModalOpen(false);
    };
  
    return (
        <div className="navbar-auth">
          <button id="btn-login-register" onClick={openModal}>
            {" "}
            Login{" "}
          </button>
          <LoginModal isOpen={isLoginModalOpen} onClose={closeModal} />
        </div>
    );
  }
  