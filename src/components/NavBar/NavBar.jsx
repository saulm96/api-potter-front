import { NavLink } from "react-router-dom";
import { useState } from "react";

import LoginModal from "../LoginModal/Modal";

import "./navbar.css";
export default function Nav() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openModal = () => { setIsLoginModalOpen(true) };
  const closeModal = () => { setIsLoginModalOpen(false) };

  return (
    <nav>
      <div>
      <h2>Olivanders</h2>
      <p>Makers of Fine Wands since 382 BC</p>
      </div>
      <ul className="navbar-router">
        <li className="navbar-home">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
          >
            Home
          </NavLink>
        </li>

        <li className="navbar-wands">
          <NavLink
            to="/wands"
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
          >
            Wands
          </NavLink>
        </li>

        <li className="navbar-characters">
          <NavLink
            to="/characters"
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
          >
            Characters
          </NavLink>
        </li>
      </ul>

      <div className="navbar-auth">
            <button className="btn-login-register" onClick={openModal}> Login </button>
            <LoginModal isOpen={isLoginModalOpen} onClose={closeModal} />
      </div>
    </nav>
  );
}
