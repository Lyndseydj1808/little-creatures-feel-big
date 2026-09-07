import React from "react";
import { Link } from "react-router-dom";
import './HomeButton.css'

export default function HomeButton() {

  return <div>
    <Link className="home-button" to="/">🏠 Home </Link>
  </div>;
}
