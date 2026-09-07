import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import "./About.css";
import profilePicture from "../assets/images/profile-pic.jpg";
import unicornHappy from "../assets/images/creatures/unicorn-happy.png";
import peacockHappy from "../assets/images/creatures/peacock-happy.png";
import phoenixHappy from "../assets/images/creatures/phoenix-excited.png";
import llamaHappy from "../assets/images/creatures/llama-happy.png";
import dragonHappy from "../assets/images/creatures/dragon-happy.png";

export default function About({ childName }) {
  return (
    <div className="about-container">
      <header className="main-header">
      <h1 className="about-the-game">About the game!</h1>
      <p className="about-description">
        {childName ? `Hi ${childName}!` : "Hi friend!"} Welcome to Little
        Creatures Feel Big! We hope you have so much fun playing with us! We
        love learning about our big feelings in a fun way!{" "}
      </p>
      </header>
      <ul className="about-list">
        <li>
          ✨ Play our Feeling Friends game to guess how the creatures are
          feeling today!
        </li>
        <li>
          ✨ Play Kind Creatures and pick a kind saying for our creatures to
          say!
        </li>
        <li>
          ✨Parents, check out our parent dashboard for more information and to
          enter your child's name and age to add to their fun!
        </li>
      </ul>
      <div className="meet-the-creatures-container">
        <table>
          <caption>Meet the Creatures!</caption>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Creature</th>
              <th>Name</th>
            </tr>
          </thead>
        <tbody>
          <tr>
            <td>
              <img
                src={unicornHappy}
                className="table-creature-image"
                alt="Unicorn image created using AI"
              />
            </td>
            <td>Unicorn</td>
            <td>Yardly</td>
          </tr>
          <tr>
            <td>
              <img
                src={peacockHappy}
                className="table-creature-image"
                alt="Peacock image created using AI"
              />
            </td>
            <td>Peacock</td>
            <td>Perry</td>
          </tr>
          <tr>
            <td>
              <img
                src={llamaHappy}
                className="table-creature-image"
                alt="Llama image created using AI"
              />
            </td>
            <td>Llama</td>
            <td>Larry</td>
          </tr>
          <tr>
            <td>
              <img
                src={dragonHappy}
                className="table-creature-image"
                alt="Dragon image created using AI"
              />
            </td>
            <td>Dragon</td>
            <td>Danny</td>
          </tr>
          <tr>
            <td>
              <img
                src={phoenixHappy}
                className="table-creature-image"
                alt="Phoenix image created using AI"
              />
            </td>
            <td>Phoenix</td>
            <td>Finnleigh</td>
          </tr>
        </tbody>
        </table>
      </div>
      <h1 className="about-the-dev">About the developer!</h1>
      <img
        className="profile-picture"
        src={profilePicture}
        alt="Profile picture"
      />
      <p className="about-dev">
        Hi! My name is Lyndsey. I'm a software development student and, most
        importantly, a mother. I created Little Creatures Feel Big as a
        heart-led project to help my own children learn about emotional
        intelligence and build a foundation of self-worth.
        <br />
        <br />
        This project has allowed me to tie together the front-end fundamentals
        I've been mastering. Moving from basic JavaScript/HTML/CSS to building a
        dynamic, state-driven React application. By focusing on reusable
        components and clean data structures, I've built a scalable application
        that I hope to expand on and grow as my children do.{" "}
      </p>
      <div className="dev-links">
        <a
          href="https://github.com/Lyndseydj1808"
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          GitHub
        </a>
        <a
        href="https://www.linkedin.com/in/lyndsey-clarkson/"
        target="_blank"
        rel="noreferrer"
        className="linkedIn-button"
        >
          LinkedIn
        </a>
        <a
        href="https://lyndseydj1808.github.io/Lyndsey-Clarkson-Portfolio/"
        target="_blank"
        rel="noreferrer"
        className="portfolio-button"
        >
          Portfolio
        </a>
        <div className="contact">
          <h2 className="contact-header">Contact Me!</h2>
          <p>If you have any questions about the game, this project, or me please email!</p>
          <a
          href="mailto: lyndseydj1808@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="email"
          >
            Email
          </a>
        </div>
      </div>
      <BackButton />
    </div>
  );
}
