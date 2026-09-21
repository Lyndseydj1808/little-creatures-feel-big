import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { deleteParentAccount } from "../services/parentService";
import "./DeleteParent.css";

export default function DeleteParent() {
  const navigate = useNavigate();
  const [deleteFeedback, setDeleteFeedback] = useState("");

  const handleDelete = async () => {
    try {
      await deleteParentAccount();
      navigate("/parent-login");
    } catch (error) {
      setDeleteFeedback("⚠️ Error deleting account");
    }
  };
  return (
    <div>
      <div className="delete-account-section">
        <p className="delete-message">
          {" "}
          ***Clicking this button will PERMANENTLY DELETE this parent account
          AND all associated child accounts for this parent account! Only click
          this button if you are SURE you want to DELETE your account!***
        </p>
        <button className="delete-account" type="button" onClick={handleDelete}>
          DELETE ACCOUNT
        </button>
        {deleteFeedback && <p className="delete-feedback">{deleteFeedback}</p>}
        <Link className="back-to-button" to="/parent-dashboard">
          ⬅️ Back to Parent Dashboard
        </Link>
      </div>
    </div>
  );
}
