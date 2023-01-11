import React, { useState } from "react";
import "./dropdownCard.css";
import arrowUp from "../../assets/dropdownCardArrows/arrow-up.svg";
import arrowDown from "../../assets/dropdownCardArrows/arrow-down.svg";

function DropdownCard({ title, description, key}) {
  const [isOpen, setisOpen] = useState(false);

  const handleToggle = (e) => {
    setisOpen(!isOpen);
  };

  return (
    <div className="card-dropdown">
      <div className="dropdown-card-header" onClick={handleToggle}>
        <span className="dropdown-card-title">{title}</span>
        <div className="btn-arrow">
          {isOpen ? (
            <img src={arrowUp} alt="up arrow" />
          ) : (
            <img src={arrowDown} alt="down arrow" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-card-body">
          <p className="dropdown-card-description">{description}</p>
        </div>
      )}
    </div>
  );
}

export default DropdownCard;
