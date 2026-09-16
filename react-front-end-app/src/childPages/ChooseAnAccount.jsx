import React from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import useChildAccounts from "../hooks/useChildAccounts";
import "../childPages/ChooseAnAccount.css";

export default function ChooseAnAccount() {
  const { childAccounts, loading, loadError } = useChildAccounts();

  if (!loadError) {
    return (
      <main className="choose-account-contianer">
        <div className="parent-logged-in">
          {loading && (
            <div className="loading-placeholder">
              <LoadingSpinner />
            </div>
          )}
          {loadError && <p>Error: {loadError}</p>}
          {childAccounts.map((child) => (
            <Link
              className="child-button-to-main-games"
              to={`/mini-games/${child.childId}`}
              key={child.childId}
            >
               {child.name}
            </Link>
          ))}
          <span className="or-divider">OR</span>
          <Link className="guest" to="/mini-games">
            ▶️ Play Now as a guest!
          </Link>
        </div>
      </main>
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
