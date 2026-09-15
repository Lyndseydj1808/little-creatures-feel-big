import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import HomeButton from "../components/HomeButton";
import ParentDashboardButton from "../components/ParentDashboardButton";
import useChildAccounts from "../hooks/useChildAccounts";

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
        <div key={child.childId}>
          <p>{child.name}</p>
          <p>Age: {child.age}</p>
          <p>Stars: {child.starCount}</p>
          <p>Creature: {child.creatureChoice}</p>
        </div>
      ))}
      <div>
        <ParentDashboardButton />
        <HomeButton />
      </div>
    </main>
  );
}
