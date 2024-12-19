import { useState, useEffect, useRef } from "react";

import DropDownButton from "./DropDownButton/DropDownButton";
import DropDownMenu from "./DropDownMenu/DropDownMenu";

import "./dropdownsectionsmenu.css";

const DropdownSectionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsClicked(!isClicked);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
      setIsClicked(false);
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

      <DropDownButton onClick={toggleMenu} isClicked={isClicked}/>

      {isOpen && <DropDownMenu />}
      
    </div>
  )
};

export default DropdownSectionMenu;
