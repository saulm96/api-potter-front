import "./dropdownbutton.css";

const DropDownButton = ({ onClick }) => {
  return (
    <div className="dropdownmenu-style-sect">
      <button className="dropdown-toggle" onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default DropDownButton;
