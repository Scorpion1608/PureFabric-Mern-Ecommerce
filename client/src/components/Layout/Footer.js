import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Ecommerce App. All Rights Reserved . </p>
      <div className="footer-links">
        <NavLink to="/policy">Privacy Policy</NavLink>
        <span>|</span>
        <NavLink to="/about">About Us</NavLink >
        <span>|</span>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
