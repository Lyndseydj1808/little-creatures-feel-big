import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { updateParentAccount } from "../services/parentService";
import { getParent } from "../services/parentService";
import { Link } from "react-router-dom";
import "./ParentUpdateAccount.css"


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
      {!formSubmit && (
        <div className="update-email-name-form">
          <h1>Update Account</h1>
          <h2>Please provide updated email and name </h2>
          <form className="form update-account-form" onSubmit={handleUpdate}>
            <label htmlFor="email">
              Email Address <span className="required-asterisk">*</span>
            </label>{" "}
            <input
              className="form-input update-account-form-input"
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
              className="form-input update-account-form-input"
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
              className="form-input update-account-form-input"
              type="text"
              id="lastName"
              required
              autoComplete="family-name"//autofills based on users saved info in browser
              value={lastName}//autofills the input fiels with the lastName from the getParent call
              onChange={(event) => setLastName(event.target.value)}
              placeholder="Enter updated last name"
            />
            <p className="required-note">* = required field</p>
            <button className="form-button update-account-button" type="submit">
              Update Account
            </button>
          </form>
        </div>
      )}
      {formSubmit && <div className="feedback">{formFeedback}</div>}
      <Link className="back-to-button" to="/parent-dashboard">
        ⬅️ Back to Parent Dashboard
      </Link>
    </main>
  );
}
