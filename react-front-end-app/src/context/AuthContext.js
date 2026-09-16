// Context for sharing parent auth status across components
// null is just the fallback if something reads this without a Provider wrapping it
import { createContext } from "react";

const AuthContext = createContext(null);

export default AuthContext;
