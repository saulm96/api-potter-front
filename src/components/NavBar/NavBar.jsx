import { NavLink } from "react-router-dom";

import "./navbar.css";
export default function Nav() {
  return (
    <nav>
      <img
        src="../../assets/title-img.jpeg"
        alt="Olivanders-logo"
        className="navbar-img"
      />
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

      <ul className="navbar-auth">
        <li className="navbar-login">
          <NavLink
            to="/login"
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
          >
            <button className="btn-donate">Login</button>
          </NavLink>
        </li>

        <li className="navbar-register">
          <NavLink
            to="/register"
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
          >
            <button className="btn-register">Register</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
