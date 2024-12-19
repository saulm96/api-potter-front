import LoginButton from "../Login/LoginButton/LoginButton";
import DropdownMenu from "../DropDownMenu/DropDownMenu";

import "./navbar.css";
export default function Nav() {

  return (
    <nav id="navBar">
      <DropdownMenu />
      <LoginButton />
    </nav>
  );
}
