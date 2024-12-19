import LoginButton from "../Login/LoginButton/LoginButton";
import DropdownSectionMenu from "../DropDownSectionMenu/DropDownSectionsMenu";

import "./navbar.css";
export default function Nav() {

  return (
    <nav id="navBar">
      <DropdownSectionMenu />
      <LoginButton />
    </nav>
  );
}
