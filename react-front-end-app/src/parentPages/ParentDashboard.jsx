import React, { useEffect, useState } from "react";
import { getParent, logoutParent } from "../services/parentService";
import { useNavigate, Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import "./ParentDashboard.css";

export default function ParentDashboard() {
  const navigate = useNavigate();
  const [checkingSession, setCheckingSession] = useState(true);
  const [logoutFeedback, setLogoutFeedback] = useState("");

  useEffect(() => {
    async function checkIfLoggedIn() {
      try {
        await getParent();
        setCheckingSession(false); //if logged in page renders
      } catch (error) {
        navigate("/parent-login"); //if not logged in routes to parent-login
      }
    }

    checkIfLoggedIn();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await logoutParent();
      navigate("/parent-login");
    } catch (error) {
      setLogoutFeedback("⚠️ Error logging out");
    }
  };

  if (checkingSession) {
    return (
      <div className="loading-placeholder">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="parent-dashboard-container">
      <h1>Parent Dashboard</h1>
      <nav className="dashboard-buttons" aria-label="Parent dashboard">
        <Link
          className="dashboard-button create-child-account-button"
          to="/create-child-account"
        >
          Create Child Account
        </Link>
        <Link
          className="dashboard-button view-child-account-button"
          to="/child-accounts"
        >
          View/Update Child Accounts
        </Link>
        <Link
          className="dashboard-button update-parent-account"
          to="/update-parent-account"
        >
          Update Account Info
        </Link>
        <Link
          className="dashboard-button update-password"
          to="/update-password"
        >
          Update Password
        </Link>
        </nav>
        <div className="logout-section">
        <button
          className="logout-button"
          type="button"
          onClick={handleLogout}
        >
          Log Out
        </button>
        {logoutFeedback && <p className="logout-feedback">{logoutFeedback}</p>}
        </div>
        <div className="delete-account-section">
          <Link className="delete-account" to="/delete-parent-account">Delete Account</Link>
        </div>
    </div>
  );
}
