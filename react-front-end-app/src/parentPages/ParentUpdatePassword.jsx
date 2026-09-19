import React, { useState } from "react";
import { updateParentPassword } from "../services/parentService";
import "./ParentUpdatePassword.css";
import ParentDashboardButton from "../components/ParentDashboardButton";

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
      setFormFeedback("Password updated succesfully");
      setPassword("");
    } catch (error) {
      setFormFeedback("⚠️ Error updating account. Please try again.");
    }
  };

  return (
    <main className="update-password-container">
      <section className="update-password-section">
        {formSubmit && <div className="feedback">{formFeedback}
          <ParentDashboardButton />
        </div>
        }
      </section>
      <section>
        {!formSubmit && (
          <div className="update-password-container">
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
          </div>
        )}
      </section>
    </main>
  );
}
