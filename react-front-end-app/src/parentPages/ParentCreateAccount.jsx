import React, { useState } from "react";
import BackButton from "../components/BackButton";
import "./ParentCreateAccount.css";
import { Link } from "react-router-dom";
import ParentDashboardButton from "../components/ParentDashboardButton";
import HomeButton from "../components/HomeButton";
import { createParent } from "../services/parentService";

export default function ParentCreateAccount() {
  const [formSubmit, setFormSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [formValidationFeedback, setFormValidationFeedback] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !firstName || !lastName || !password) {
      setFormValidationFeedback("⚠️ Please include all required fields.");
    } else if (password.length < 8) {
      setFormValidationFeedback(
        "⚠️ Password must contain at least 8 characters.",
      );
    } else {
      try {
      await createParent({ email, password, firstName, lastName});
      setFormSubmit(true);
      setFormValidationFeedback("");
    } catch (error) {
      console.error(error);
      setFormValidationFeedback(
        "⚠️ Something went wrong creating your account. Please try again.",
      );
    }
  }
  };
  return (
    <main className="parent-create-account-container">
      <div className="create-account">
        <header>
          <h1 className="text-5xl font-bold text-red-500">Hi Parents!</h1>
          <h2> Welcome to Little Creatures Feel Big!</h2>
        </header>
        <section className="dashboard-description-section">
          <p className="dashboard-description">
            I created this game to turn emotional learning into a joyful
            adventure for your little ones. As a parent, I know that big
            emotions can feel overwhelming for children. Research shows that
            developing emotional intelligence at an early age is a superpower.
            It helps kids build resilience, empathy, and better communication
            skills.
            <br /> In this world of mini-games, your child will:
          </p>

          <ul className="dashboard-list">
            <li>
              ✨ Meet the Creatures: Friendly characters who experience the same
              highs and lows kids do.
            </li>
            <li>
              ✨ Name That Feeling: Practice identifying emotions through play.
            </li>
            <li>
              ✨ Build a Toolkit: Practice self-kindness and body confidence in
              a safe, stress-free environment.
            </li>
          </ul>
          <p className="dashboard-description">
            Let's get started! Please create an account to add profiles for your
            children to play with. You can also choose to set time limits for
            your children.
          </p>
        </section>
        <section className="form">
          {/*form for parents to create account */}
          {formValidationFeedback && (
            <div className="form-validation-feedback">
              {formValidationFeedback}
            </div>
          )}
          {!formSubmit && (
            <form className="parent-form" onSubmit={handleSubmit}>
              <label htmlFor="email">
                Email Address <span className="required-asterisk">*</span>
              </label>{" "}
              <input
                className="parent-form-input"
                type="email"
                id="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="example@email.com"
              />
              <label htmlFor="firstName">First Name <span className="required-asterisk">*</span></label>
              <input
                className="parent-form-input"
                type="text"
                id="firstName"
                required
                autoComplete="given-name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="Enter first name"
              />
              <label htmlFor="lastName">Last Name <span className="required-asterisk">*</span></label>
              <input
                className="parent-form-input"
                type="text"
                id="lastName"
                required
                autoComplete="family-name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                placeholder="Enter last name"
              />
              <label htmlFor="password">Password <span className="required-asterisk">*</span></label>
              <input
                className="parent-form-input"
                type="password"
                id="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter password"
              />
              <p className="required-note">* = required field</p>
              <button className="create-account" type="submit">
                Create Account
              </button>
            </form>
          )}
        </section>

        {formSubmit && (
          <section className="form-feedback-section">
            <div className="form-submit-feedback">{`Account created successfully!`}</div>
            <Link className="login" to="/parent-login">
              Login
            </Link>
          </section>
        )}

        <ParentDashboardButton />
        <HomeButton />
      </div>
    </main>
  );
}
