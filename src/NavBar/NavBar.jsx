import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>

      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? "active" : "";
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/wands"
        className={({ isActive }) => {
          return isActive ? "active" : "";
        }}
      >
        Wands
      </NavLink>

      <NavLink
      to="/characters"
      className={({ isActive }) => {
        return isActive ? "active" : "";
      }}
      >
        Characters
      </NavLink>

      <NavLink
      to="/wandmakers"
      className={({ isActive }) => {
        return isActive ? "active" : "";
      }}
      >
        Wandmakers
      </NavLink>
      
    </nav>
  );
}
