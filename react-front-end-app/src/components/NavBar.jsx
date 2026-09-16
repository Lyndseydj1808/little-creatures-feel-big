import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/lcfb-nav-image.jpg";
import "./NavBar.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function NavBar() {
  // tunes into the shared auth broadcast to read current login status
  const { authValue } = useContext(AuthContext);

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
        {/* shows Parent Login if logged out, Parent Dashboard if a parent is logged in */}
        {authValue === null ? (
          <Link to="/parent-login" className="parent-dashboard nav-button">
            Parent Login
          </Link>
        ) : (
          <Link to="/parent-dashboard" className="parent-dashboard nav-button">
            Parent Dashboard
          </Link>
        )}
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
