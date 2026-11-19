import React, { useState } from "react";
import "./PinForm.css";

// One form that plays three roles, depending on the "mode" it is given:
//   "setup" = first time, choose a PIN
//   "enter" = a PIN exists, type it to unlock
//   "reset" = forgot the PIN, prove it's you with the account password, then choose a new one
const PIN_PATTERN = /^\d{4}$/;

const TEXT = {
  setup: {
    title: "Create a Parent PIN",
    description:
      "Choose a 4-digit PIN. You'll use it to open the Parent Dashboard so little ones can't wander in.",
    button: "Save PIN",
  },
  enter: {
    title: "Enter Parent PIN",
    description: "Please enter your 4-digit PIN to open the Parent Dashboard.",
    button: "Unlock",
  },
  reset: {
    title: "Reset Your PIN",
    description: "Enter your account password, then choose a new 4-digit PIN.",
    button: "Reset PIN",
  },
};

export default function PinForm({
  mode,
  feedback,
  onSubmit,
  onForgot,
  onBackToPin,
}) {
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [localFeedback, setLocalFeedback] = useState("");

  const text = TEXT[mode];
  const needsConfirm = mode === "setup" || mode === "reset";

  // only lets digits through, and stops at 4
  const cleanPin = (value) => value.replace(/\D/g, "").slice(0, 4);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mode === "reset" && !password) {
      setLocalFeedback("⚠️ Please enter your account password.");
      return;
    }
    if (!PIN_PATTERN.test(pin)) {
      setLocalFeedback("⚠️ PIN must be exactly 4 digits.");
      return;
    }
    if (needsConfirm && pin !== confirmPin) {
      setLocalFeedback("⚠️ The PINs do not match.");
      return;
    }

    setLocalFeedback("");
    onSubmit({ pin, password }); // the gate (RequirePin) talks to the server
    // clear the boxes so a wrong PIN isn't left sitting on the screen
    setPin("");
    setConfirmPin("");
    setPassword("");
  };

  // a problem found right here (like mismatched PINs) shows first, otherwise the server's message
  const message = localFeedback || feedback;

  return (
    <div className="pin-container">
      <h1>{text.title}</h1>
      <p className="pin-description">{text.description}</p>
      {message && (
        <div className="pin-feedback" role="alert">
          {message}
        </div>
      )}
      <form className="pin-form" onSubmit={handleSubmit}>
        {mode === "reset" && (
          <>
            <label htmlFor="pin-account-password">Account Password</label>
            <input
              className="pin-text-input"
              type="password"
              id="pin-account-password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
            />
          </>
        )}
        <label htmlFor="pin-entry">{mode === "reset" ? "New PIN" : "PIN"}</label>
        <input
          className="pin-input"
          type="password"
          id="pin-entry"
          inputMode="numeric"
          autoComplete="off"
          maxLength={4}
          value={pin}
          onChange={(event) => setPin(cleanPin(event.target.value))}
          placeholder="4 digits"
        />
        {needsConfirm && (
          <>
            <label htmlFor="pin-confirm">Confirm PIN</label>
            <input
              className="pin-input"
              type="password"
              id="pin-confirm"
              inputMode="numeric"
              autoComplete="off"
              maxLength={4}
              value={confirmPin}
              onChange={(event) => setConfirmPin(cleanPin(event.target.value))}
              placeholder="4 digits"
            />
          </>
        )}
        <button type="submit" className="pin-button">
          {text.button}
        </button>
        {mode === "enter" && (
          <button type="button" className="pin-link-button" onClick={onForgot}>
            Forgot PIN?
          </button>
        )}
        {mode === "reset" && (
          <button type="button" className="pin-link-button" onClick={onBackToPin}>
            Back
          </button>
        )}
      </form>
    </div>
  );
}
