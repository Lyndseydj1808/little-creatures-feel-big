import React, { useCallback, useState, useEffect } from "react"
import { API_URL } from "../services/apiConfig";

export default function useChildAccounts() {
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

      return { childAccounts, loading, loadError };
}
