import React from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import HomeButton from "../components/HomeButton";
import ParentDashboardButton from "../components/ParentDashboardButton";
import useChildAccounts from "../hooks/useChildAccounts";
import "./ChildAccounts.css";

export default function ChildAccounts() {
  const { childAccounts, loading, loadError } = useChildAccounts();

  return (
    <main className="child-accounts-container">
      {loading && (
        <div className="loading-placeholder">
          <LoadingSpinner />
        </div>
      )}
      {loadError && <p>Error: {loadError}</p>}
      {childAccounts.map((child) => (
        <div className="child-account" key={child.childId}>
          <Link className="update-child-account" to={`/update-child-account/${child.childId}`}>
            {child.name}
          </Link>
        </div>
      ))}
      <Link className="back-to-button" to="/create-child-account">
        Create another child account
      </Link>
      <Link className="back-to-button" to="/parent-dashboard">
        ⬅️ Back to Parent Dashboard
      </Link>
    </main>
  );
}
