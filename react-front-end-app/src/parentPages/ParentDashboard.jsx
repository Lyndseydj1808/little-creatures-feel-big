import { Link } from "react-router-dom";
import "./ParentDashboard.css";

export default function ParentDashboard() {

  return (
    <main className="parent-dashboard-container">
      <div className="parent-nav-buttons">
        <Link className="create-child-account-button" to="/create-child-account">Create Child Account</Link>
        <Link className="view-child-account-button" to="/child-accounts">View Child Accounts</Link>
        <Link className="set-time-limit-button" to="/time-limit">Set Time Limit</Link>
      </div>
    </main>
  )
  

}

     
