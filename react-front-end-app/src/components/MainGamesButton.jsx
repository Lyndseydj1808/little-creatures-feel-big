import React from 'react'
import { Link } from "react-router-dom";
import './MainGamesButton.css'

export default function MainGamesButton() {
  return <div>
    <Link className="main-games-button" to="/mini-games">⬅️ Back to Mini-Games! </Link>
  </div>;
  
}
