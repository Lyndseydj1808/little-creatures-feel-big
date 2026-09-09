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
      <div className="nav-buttons">
        <Link className="button parent-dashboard" to="/parent-login">
          Parent Dashboard
        </Link>
        <Link className="button lets-play" to="/choose-an-account">
          Let's Play!
        </Link>
        <Link className="button about" to="/about">
          Learn About The Game
        </Link>
      </div>
      <footer>
        <p>Designed for children ages 4-8</p>
        <p>© 2026 Little Creatures Feel Big Created by Lyndsey Clarkson</p>
        <p>Images generated using AI - Nano Banana 2</p>
      </footer>
    </main>
  );
}
