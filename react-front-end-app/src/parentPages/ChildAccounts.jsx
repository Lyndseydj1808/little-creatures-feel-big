import React, { useCallback, useState, useEffect } from "react"
import { API_URL } from "../services/apiConfig";
import LoadingSpinner from "../components/LoadingSpinner";
import HomeButton from "../components/HomeButton";
import ParentDashboardButton from "../components/ParentDashboardButton";

export default function ChildAccounts() {
    const [childAccounts, setChildAccounts] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [loadError, setLoadError] = useState("");

    const loadChildAccounts = useCallback(async () => {
        setLoading(true);
        setLoadError("");
        try {
                const response = await fetch(`${API_URL}/parent/childList`, {
                    method:'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include'
                    });

                    const data = await response.json()

                    setChildAccounts(Array.isArray(data) ? data : []);
                    console.log(data);

            }  catch (e) {
            setLoadError(e.message);
        } finally {
            setLoading(false);
        }
    }, []);
   

        useEffect(() => {
        loadChildAccounts();
    }, [loadChildAccounts]);

    return (
        <main className="child-accounts-container">
            {loading && <div className="loading-placeholder">
                      <LoadingSpinner /></div>}
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