import React, { useState } from "react";
import { updateParentPassword } from "../services/parentService";
import "./ParentUpdatePassword.css";
import { Link } from "react-router-dom";

export default function ParentUpdatePassword() {
  const [password, setPassword] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  const [formFeedback, setFormFeedback] = useState("");

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await updateParentPassword({
        password,
      });
      setFormSubmit(true);
      setFormFeedback("Password updated successfully");
      setPassword("");
    } catch (error) {
      setFormFeedback("⚠️ Error updating password. Please try again.");
    }
  };

  return (
    <div className="update-password-section">
      <h1 className="update-password">Update Password</h1>
        {formFeedback && <div className="feedback">{formFeedback}</div>}
        {!formSubmit && (
          <form className="update-password-form" onSubmit={handleUpdate}>
            <label htmlFor="password">New Password</label>
            <input
              className="update-password-form-input"
              type="password"
              id="password"
              autoComplete="new-password"
              required
              minLength={8}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
            />
            <button className="update-password-button" type="submit">
              Update Password
            </button>
          </form>
        )}
        <Link className="back-to-button" to="/parent-dashboard">
          ⬅️ Back to Parent Dashboard
        </Link>
    </div>
  );
}
