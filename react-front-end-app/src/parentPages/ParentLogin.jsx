import React, { useState } from "react";
import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loginParent } from "../services/parentService";
import "./ParentLogin.css";

export default function ParentLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setFeedback("⚠️ Please enter email and password.");
    } else {
      try {
        await loginParent({ email, password });
        navigate("/parent-dashboard");
      } catch (error) {
        console.error(error);
        setFeedback("⚠️ Login failed. Please try again.");
      }
    }
  };

  return (
    <main className="parent-dashboard-container">
      <section className="login-form-section">
        {feedback && <div className="login-feedback">{feedback}</div>}
        <div className="login">
          <h1>Please Login</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              className="login-form-input"
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@example.com"
            />
            <label htmlFor="password">Password</label>
            <input
              className="login-form-input"
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
            />
            <button type="submit">Log In</button>
          </form>
          <p>or</p>
          <Link className="create-account" to="/parent-create-account">
            Create An Account
          </Link>
        </div>
      </section>
      <BackButton />
    </main>
  );
}
