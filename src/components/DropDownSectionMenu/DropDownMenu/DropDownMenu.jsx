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
  );
};

export default DropDownMenu;
