import React, { useCallback, useState, useEffect } from "react"
import { getChildAccounts } from "../services/childService";

export default function useChildAccounts() {
      const [childAccounts, setChildAccounts] = useState([]); 
      const [loading, setLoading] = useState(false);
      const [loadError, setLoadError] = useState("");
  
      const loadChildAccounts = useCallback(async () => {
          setLoading(true);
          setLoadError("");
          try {
                  const data = await getChildAccounts();
                  setChildAccounts(Array.isArray(data) ? data : []);
  
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
