import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/lcfb-nav-image.jpg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img
          src={logo}
          alt="Little Creatures Feel Big logo"
          className="nav-logo"
        />{" "}
      </Link>
      <div className="nav-links">
        <Link to="/parent-dashboard" className="parent-dashboard nav-button">
          Parent Dashboard
        </Link>
        <Link to="/choose-an-account" className="lets-play nav-button">
          Let's Play!
        </Link>
        <Link to="/about" className="about nav-button">
          About
        </Link>
      </div>
    </nav>
  );
}
