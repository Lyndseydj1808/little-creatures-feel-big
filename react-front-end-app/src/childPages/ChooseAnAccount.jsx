import React from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import HomeButton from "../components/HomeButton";
import ChildAccounts from "../parentPages/ChildAccounts";
import useChildAccounts from "../hooks/useChildAccounts";

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
    className="button-to-main-games"
    to={`/mini-games/${child.childId}`}
    key={child.childId}
    >
      <p>{child.name}</p>
    </Link> 
  ))}
  <p>OR</p>
  <Link 
  className="guest"
  to="/mini-games">
    <p>Play Now as a guest!</p>
    </Link>
    </div>
    </main>
    )}

  return (
    <div className="no-parent-account">
      <p>Please have a parent log in to play with your account.</p>
      <p>OR</p>
        <Link 
  className="guest"
  to="/mini-games">
    <p>Play Now as a guest!</p>
    </Link>
    </div>
  );
}