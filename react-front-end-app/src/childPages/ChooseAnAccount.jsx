import React from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import useChildAccounts from "../hooks/useChildAccounts";
import "../childPages/ChooseAnAccount.css";

export default function ChooseAnAccount() {
  const { childAccounts, loading, loadError } = useChildAccounts();//custom hook

  if (!loadError) {
    return (
      <div className="parent-logged-in">
        {loading && (
          <div className="loading-placeholder">
            <LoadingSpinner />
          </div>
        )}
        {loadError && <p>Error: {loadError}</p>}
        <h1>Who is playing?</h1>
        {childAccounts.map((child) => (//loops through child accounts to display, when clicked they navigate to the mini-games page
          <Link
            className="child-button-to-main-games"
            to={`/mini-games/${child.childId}`}
            key={child.childId}
          >
            {child.name}
          </Link>
        ))}
        {/* or can always play as guest */}
        <span className="or-divider">OR</span> 
        <Link className="guest" to="/mini-games">
          ▶️ Play Now as a guest!
        </Link>
      </div>
    );
  }

  return (
    <div className="no-parent-account">
      <p className="no-parent">
        Please have a parent log in to play with your account.
      </p>
      <span className="or-divider">OR</span>
      <Link className="guest" to="/mini-games">
        ▶️ Play Now as a guest!
      </Link>
    </div>
  );
}
