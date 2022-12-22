import React from "react";
import "./header.css";
import logo from "../../assets/logo-color.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="header-link">
      <img src={logo} alt="Logo de l'entreprise Kasa" />
      </Link>
        
        <nav className="header-navBar">
      <Link to="/" className="header-link">
        Acceuil
      </Link>
      <Link to="/About" className="header-link">
        A propos
      </Link>
    </nav>
    </header>
  );
}

export default Header;