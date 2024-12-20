import { NavLink } from "react-router-dom";

import "./dropdownmenu.css";

const DropDownMenu = () => {
  return (
    <div className={"dropdown-menu"}>
      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/wands"
      >
        Wands
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/characters"
      >
        Characters
      </NavLink>
    </div>
  );
};

export default DropDownMenu;
