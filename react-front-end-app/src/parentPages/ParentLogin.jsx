import React, { useState, useEffect, useContext } from "react";
import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loginParent } from "../services/parentService";
import "./ParentLogin.css";
import { getParent } from "../services/parentService";
import LoadingSpinner from "../components/LoadingSpinner";
import AuthContext from "../context/AuthContext";

export default function ParentLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");
  const [checkingSession, setCheckingSession] = useState(true);

  // pulls setAuthValue from the shared auth broadcast so a successful login
  // can update it directly, without a second server round trip
  const { setAuthValue } = useContext(AuthContext);

  //checks if parent is logged in, if so reroutes to parent-dashboard
  useEffect(() => {
    async function checkIfLoggedIn() {
      try {
        await getParent();
        navigate("/parent-dashboard"); //if logged in routes to parent-dashboard
      } catch (error) {
        setCheckingSession(false); //if not logged in, page renders
      }
    }

    checkIfLoggedIn();
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setFeedback("⚠️ Please enter email and password.");
    } else {
      try {
        const parentData = await loginParent({ email, password });
        setAuthValue(parentData);
        navigate("/parent-dashboard");
      } catch (error) {
        console.error(error);
        setFeedback("⚠️ Login failed. Please try again.");
      }
    }
  };

  // shows a spinner while the initial login check above is still running
  if (checkingSession) {
    return (
      <div className="loading-placeholder">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <main className="parent-login-container">
      <section className="login-form-section">
        {feedback && <div className="login-feedback">{feedback}</div>}
        <div className="login-section">
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
            <button type="submit" className="login-button">
              Log In
            </button>
          </form>
          <Link className="create-account" to="/parent-create-account">
            Or Create An Account
          </Link>
        </div>
      </section>
      <BackButton />
    </main>
  );
}
