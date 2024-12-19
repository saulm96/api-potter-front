import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import DropDownButton from "./DropDownButton/DropDownButton";

import "./dropdownmenu.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="dropdown" ref={menuRef}>
      <DropDownButton onClick={toggleMenu} />
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
            to="/Characters"
          >
            Characters
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
