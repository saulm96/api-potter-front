import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./dropdownmenu.css";
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleMenu}></button>
      {isOpen && (
        <div className="dropdown-menu">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/Wands"
          >
            Wands
          </NavLink>

          <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/Characters">Characters</NavLink>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
