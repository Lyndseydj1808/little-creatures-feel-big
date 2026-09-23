import React from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import useChildAccounts from "../hooks/useChildAccounts";
import "./ChildAccounts.css";

export default function ChildAccounts() {
  const { childAccounts, loading, loadError } = useChildAccounts();

  return (
    <div className="child-accounts-container">
      {loading && (
        <div className="loading-placeholder">
          <LoadingSpinner />
        </div>
      )}
      <h1>Child Accounts</h1>
      {loadError && <p>Error: {loadError}</p>}
      <ul className="child-accounts-list">
        {childAccounts.map((child) => (
          <li className="child-account" key={child.childId}>
            <Link
              className="update-child-account"
              to={`/update-child-account/${child.childId}`}
            >
              {child.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link className="back-to-button" to="/create-child-account">
        Create another child account
      </Link>
      <Link className="back-to-button" to="/parent-dashboard">
        ⬅️ Back to Parent Dashboard
      </Link>
    </div>
  );
}
