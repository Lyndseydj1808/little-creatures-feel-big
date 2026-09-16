import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { getParent } from "../services/parentService";

export default function AuthProvider({ children }) {
  // authValue is the current broadcast: either the logged in parent's data, or null if nobody's logged in
  // setAuthValue is the "request line", the way any component can update the broadcast, not just read it
  const [authValue, setAuthValue] = useState(null);

  // runs once when the app first loads (empty dependency array = no repeats)
  // this is the initial check: "who's logged in right now, if anyone?"
  useEffect(() => {
    async function checkAuth() {
      try {
        const parentData = await getParent();
        setAuthValue(parentData); // broadcast the real parent data
      } catch (error) {
        setAuthValue(null); // nobody's logged in, broadcast null instead
      }
    }

    checkAuth();
  }, []);

  // the actual tower: broadcasts both the current value AND the ability to update it
  // any component wrapped inside this can tune in with useContext(AuthContext)
  return (
    <AuthContext.Provider value={{ authValue, setAuthValue }}>
      {children}
    </AuthContext.Provider>
  );
}
