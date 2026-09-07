import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import "./MainGames.css";

export default function MainGames({ childName }) {
  return (
    <div className="main-games-container">
      <header className="main-games-header">
      <h1 className="games-title">
        {childName ? `Hi ${childName}! Choose your game!` : `Choose your Game!`}
      </h1>
      </header>
      <section className="game-selection">
      <div className="game-buttons">
      <Link className="game-button feeling-friends" to="/games/feeling-friends">
        <h2>▶️ Feeling Friends!</h2>
        <p>Can you tell how the creatures are feeling?</p>
      </Link>
      <Link
        className="game-button kind-creatures" to="/games/kind-creatures">
      <h2>▶️ Kind Creatures!</h2>
      <p>Can you help the creatures say something kind about themselves?</p>
      </Link>
      </div>
      </section>
      <BackButton />
    </div>
  );
}
