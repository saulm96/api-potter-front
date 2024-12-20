import { useState } from "react";
import {useLocation} from "react-router-dom";

import LoginModal from "../LoginModal/Modal"

import "./login-button.css";

export default function Login() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const location = useLocation();
  
    const openModal = () => {
      setIsLoginModalOpen(true);
    };
    const closeModal = () => {
      setIsLoginModalOpen(false);
    };

    const buttonLocation = location.pathname === "/" ?
    "login-btn lp" : "login-btn";

  
    return (
        <div className={buttonLocation}>
          <button id="btn-login-register"  onClick={openModal}>
            {" "}
            Login{" "}
          </button>
          <LoginModal isOpen={isLoginModalOpen} onClose={closeModal} />
        </div>
    );
  }
  