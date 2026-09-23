import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import mobileImage from "../assets/images/lcfb-background-2.png"

export default function Home() {
  return (
    <main className="home-container">
      <div className="mobile-image">
        <img src={mobileImage} alt="Little Creatures Feel Big! image with creatures and rainbow." />
      </div>
      <nav className="nav-buttons-landing-page">
        <Link className="landing-page-button parent-dashboard" to="/parent-login">
          Parent Dashboard
        </Link>
        <Link className="landing-page-button lets-play" to="/choose-an-account">
          Let's Play!
        </Link>
        <Link className="landing-page-button about" to="/about">
          Learn About The Game
        </Link>
      </nav>
    </main>
  );
}
