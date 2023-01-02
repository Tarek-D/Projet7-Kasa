import React from "react";
import "./footer.css";
import logo from "../../assets/LOGO.svg";

function Footer() {
  return (
    <footer>
        <img src={logo} alt="Logo Kasa"/>
        <span className="footer-text">© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

export default Footer;