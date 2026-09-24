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
import { FaGithub, FaLinkedin, FaEnvelope, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-container">
      <header className="main-header">
        <h1 className="about-the-game">About the game!</h1>
        <p className="about-description">
          Welcome to Little Creatures Feel Big! We hope you have so much fun
          playing with us! We love learning about our big feelings in a fun way!
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
          ✨ Parents, check out our parent dashboard for more information and to
          enter your child's name and age to add to their fun!
        </li>
      </ul>
      <div className="meet-the-creatures-container">
        <table>
          <caption>Meet the Creatures!</caption>
          <thead>
            <tr>
              <th>Creatures</th>
              <th></th>
              <th>About me!</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Yardly the Unicorn</td>
              <td>
                <img
                  src={unicornHappy}
                  className="table-creature-image"
                  alt="Unicorn image created using AI"
                />
              </td>
              <td className="creature-about">
                Yardly loves rainbows! Sometimes she wanders through the forest
                all day looking for every last one.
              </td>
            </tr>
            <tr>
              <td>Perry the Peacock</td>
              <td>
                <img
                  src={peacockHappy}
                  className="table-creature-image"
                  alt="Peacock image created using AI"
                />
              </td>
              <td className="creature-about">
                Perry loves to dance and show off his sparkly feathers. When he
                feels nervous before a show, he takes a big breath and shines
                anyway!
              </td>
            </tr>
            <tr>
              <td>Larry the Llama</td>
              <td>
                <img
                  src={llamaHappy}
                  className="table-creature-image"
                  alt="Llama image created using AI"
                />
              </td>
              <td className="creature-about">
                Larry loves humming silly songs and munching on crunchy carrots.
                He gives the best hugs, especially to friends having a hard day.
              </td>
            </tr>
            <tr>
              <td>Danny the Dragon</td>
              <td>
                <img
                  src={dragonHappy}
                  className="table-creature-image"
                  alt="Dragon image created using AI"
                />
              </td>
              <td className="creature-about">
                Danny loves toasting marshmallows with their gentle fire breath.
                When they feel grumpy, they breathe out slowly, like blowing out
                a birthday candle.
              </td>
            </tr>
            <tr>
              <td>Finnleigh the Phoenix</td>
              <td>
                <img
                  src={phoenixHappy}
                  className="table-creature-image"
                  alt="Phoenix image created using AI"
                />
              </td>
              <td className="creature-about">
                Finnleigh loves watching the sunrise, because it reminds her
                that every day is a fresh start. She knows it's always okay to
                try again!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="about-the-dev">About the developer!</h2>
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
        <br />I started this project to tie together the front-end fundamentals
        I've been mastering, moving from basic JavaScript, HTML, and CSS to
        building a dynamic, state-driven React application. I then expanded on
        it with what I've learned about backend systems, using Spring Boot,
        Java, and MySQL. Parents can create an account and add profiles for
        their children. By focusing on reusable components and clean data
        structures, I've built a scalable application that I hope to expand and
        grow as my children do.
      </p>
      <div className="social-links-container">
        <h2>My Links!</h2>
        <div className="social-links">
          <a
            href="https://github.com/Lyndseydj1808"
            target="_blank"
            rel="noreferrer"
            className="social-button github"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lyndsey-clarkson/"
            target="_blank"
            rel="noreferrer"
            className="social-button linkedin"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="https://lyndseydj1808.github.io/Lyndsey-Clarkson-Portfolio/"
            target="_blank"
            rel="noreferrer"
            className="social-button portfolio"
          >
            <FaLaptopCode />
            Portfolio
          </a>
          <a
            href="mailto: lyndseydj1808@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="social-button email"
          >
            <FaEnvelope />
            Email
          </a>
        </div>
        <p className="email-me">
          If you have any questions about the game, this project, or me please
          email!
        </p>
      </div>
      <BackButton />
    </div>
  );
}
