import { Link } from "react-router-dom";
import { useEffect, React, useState } from "react";
import { deleteParentAccount, getParent } from "../services/parentService";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import "./ParentDashboard.css";
import { logoutParent } from "../services/parentService";

export default function ParentDashboard() {
  const navigate = useNavigate();
  const [checkingSession, setCheckingSession] = useState(true);
  const [logoutFeedback, setLogoutFeedback] = useState("");
  const [deleteFeedback, setDeleteFeedback] = useState("");

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

  const handleDelete = async () => {
    try {
      await deleteParentAccount();
      navigate("/parent-dashboard");
      setDeleteFeedback("Account deleted");
    } catch (error) {
      setDeleteFeedback("⚠️ Error deleting account")
    }
  }

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
        <Link className="update-parent-account" to="/update-parent-account">
          Update Account Info
        </Link>
        <Link className="update-password" to="/update-password">Update Password</Link>
        <button className="logout-button" type="Button" onClick={handleLogout}>
          Logout
        </button>
        {logoutFeedback && <p className="logout-feedback">{logoutFeedback}</p>}
      <button className="delete-button" type="Button" onClick={handleDelete}>
          DELETE ACCOUNT 
        </button>
        <p>*Pressing the DELETE ACCOUNT button will perminently delete your account. Please make sure you want to delete your entire account before clicking the DELETE ACCOUNT button!*</p>
             {deleteFeedback && <p className="delete-feedback">{deleteFeedback}</p>}

      </div>
    </main>
  );
}
