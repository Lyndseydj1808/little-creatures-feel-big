import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { updateParentAccount } from "../services/parentService";
import { getParent } from "../services/parentService";

export default function ParentUpdateAccount() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  const [formFeedback, setFormFeedback] = useState("");

  useEffect(() => {
    async function loadParentData() {
      try {
        const parentData = await getParent();
        setEmail(parentData.email);
        setFirstName(parentData.firstName);
        setLastName(parentData.lastName);
      } catch (error) {
        navigate("/parent-login");
      }
    }
    loadParentData();
  }, [navigate]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await updateParentAccount({
        email,
        firstName,
        lastName,
      });
      setFormSubmit(true);
      setFormFeedback("Account updated succesfully");
    } catch (error) {
      setFormFeedback("⚠️ Error updating account. Please try again.");
    }
  };

  return (
    <main className="update-parent-account-container">
      {formSubmit && <div className="feedback">{formFeedback}</div>}

      <div className="update-email-name-form">
        <p>Please provide updated email and name </p>
        <form className="update-account-form" onSubmit={handleUpdate}>
          <label htmlFor="email">
            Email Address <span className="required-asterisk">*</span>
          </label>{" "}
          <input
            className="create-account-form-input"
            type="email"
            id="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="example@email.com"
          />
          <label htmlFor="firstName">
            First Name <span className="required-asterisk">*</span>
          </label>
          <input
            className="create-account-form-input"
            type="text"
            id="firstName"
            required
            autoComplete="given-name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="Enter updated first name"
          />
          <label htmlFor="lastName">
            Last Name <span className="required-asterisk">*</span>
          </label>
          <input
            className="create-account-form-input"
            type="text"
            id="lastName"
            required
            autoComplete="family-name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Enter updated last name"
          />
          <p className="required-note">* = required field</p>
          <button className="create-account-button" type="submit">
            Update Account
          </button>
        </form>
      </div>
    </main>
  );
}
