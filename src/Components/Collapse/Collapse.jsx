import React, { useState } from "react";
import "./collapse.css";
import arrowUp from "../../assets/dropdownCardArrows/arrow-up.svg";
import arrowDown from "../../assets/dropdownCardArrows/arrow-down.svg";

function Collapse({ title, description, id }) {
  const [isOpen, setisOpen] = useState(false);

  const handleToggle = (e) => {
    setisOpen(!isOpen);
  };

  return (
    <div className="card-dropdown">
      <div className="dropdown-card-header" onClick={handleToggle}>
        <span className="dropdown-card-title">{title}</span>
        <div className="btn-arrow">
          {/* Render ternary */}
          {isOpen ? (
            <img src={arrowUp} alt="up arrow" />
          ) : (
            <img src={arrowDown} alt="down arrow" />
          )}
        </div>
      </div>
      {/* Render if isOpen true */}
      {isOpen && (
        <div className="dropdown-card-body">
          <p className="dropdown-card-description">{description}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
