import React from "react";
import { Link } from "react-router-dom";
import './ParentDashboardButton.css'

export default function ParentDashboardButton() {
    
    return <div>
        <Link className="parent-dashboard-button" to="/parent-dashboard">Parent Dashboard </Link>
    </div>;
}
