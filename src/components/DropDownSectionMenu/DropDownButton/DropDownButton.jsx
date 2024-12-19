import "./dropdownbutton.css";

const DropDownButton = ({ onClick, isClicked }) => {
  return (
    <div className="dropdownmenu-style-sect">
      <button className={`dropdown-toggle ${isClicked ? "clicked" : ""}`} onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default DropDownButton;
