import { Link } from "react-router-dom";
import { useEffect, React, useState } from "react";
import { getParent } from "../services/parentService";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import "./ParentDashboard.css";

export default function ParentDashboard() {
  const navigate = useNavigate();
  const [checkingSession, setCheckingSession] = useState(true);

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

  if (checkingSession) {
    return (
      <div className="loading-placeholder">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <main className="parent-dashboard-container">
      <div className="parent-nav-buttons">
        <Link
          className="create-child-account-button"
          to="/create-child-account"
        >
          Create Child Account
        </Link>
        <Link className="view-child-account-button" to="/child-accounts">
          View Child Accounts
        </Link>
      </div>
    </main>
  );
}
