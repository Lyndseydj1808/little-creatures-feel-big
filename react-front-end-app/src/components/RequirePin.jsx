import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import PinForm from "./PinForm";
import {
  getPinStatus,
  setParentPin,
  verifyParentPin,
  resetParentPin,
  lockParentPin,
} from "../services/parentService";

// The bouncer for the whole parent wing. In App.jsx every parent-only route is nested inside this.
// It asks the server "has this parent unlocked with their PIN?" and shows one of:
//   loading spinner, PIN setup, PIN entry (or reset), or the real page (via <Outlet />).
// The server is the real lock. This component is the keypad and the "please wait" sign.
export default function RequirePin() {
  const navigate = useNavigate();
  const location = useLocation();

  // "loading" | "setup" | "locked" | "unlocked"
  const [status, setStatus] = useState("loading");
  const [resetting, setResetting] = useState(false);
  const [feedback, setFeedback] = useState("");
  const mounted = useRef(false);

  // Re-checks every time the parent moves to another page in the wing, so a PIN that has
  // timed out (10 minutes of no activity) asks again instead of letting a page half-load.
  useEffect(() => {
    let cancelled = false;

    async function checkPinStatus() {
      try {
        const pinStatus = await getPinStatus();
        if (cancelled) return;
        if (!pinStatus.hasPin) {
          setStatus("setup");
        } else if (pinStatus.unlocked) {
          setStatus("unlocked");
        } else {
          setStatus("locked");
          setResetting(false);
        }
      } catch {
        // not logged in at all, so send them to log in first
        if (!cancelled) navigate("/parent-login");
      }
    }

    checkPinStatus();

    return () => {
      cancelled = true; // ignore the answer if we've moved on before it arrives
    };
  }, [location.pathname, navigate]);

  // Re-locks when the parent leaves the parent wing entirely (this component unmounts).
  // The setTimeout + mounted flag is for React StrictMode in development, which mounts,
  // unmounts, and re-mounts once on purpose. A re-mount flips mounted back to true before
  // the timeout runs, so we only lock when the parent has really left.
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      setTimeout(() => {
        if (!mounted.current) {
          lockParentPin().catch(() => {}); // if they logged out, there is nothing left to lock
        }
      }, 0);
    };
  }, []);

  const handleSetup = async ({ pin }) => {
    try {
      await setParentPin(pin);
      setFeedback("");
      setStatus("unlocked");
    } catch (error) {
      console.error(error);
      setFeedback("⚠️ Could not save your PIN. Please try again.");
    }
  };

  const handleVerify = async ({ pin }) => {
    try {
      await verifyParentPin(pin);
      setFeedback("");
      setStatus("unlocked");
    } catch (error) {
      console.error(error);
      if (error.status === 429) {
        setFeedback(
          "⚠️ Too many incorrect tries. Please wait a few minutes and try again.",
        );
      } else if (error.status === 403) {
        setFeedback("⚠️ Incorrect PIN. Please try again.");
      } else {
        setFeedback("⚠️ Something went wrong. Please try again.");
      }
    }
  };

  const handleReset = async ({ password, pin }) => {
    try {
      await resetParentPin(password, pin);
      setFeedback("");
      setResetting(false);
      setStatus("unlocked");
    } catch (error) {
      console.error(error);
      if (error.status === 403) {
        setFeedback("⚠️ That password is not correct.");
      } else {
        setFeedback("⚠️ Could not reset your PIN. Please try again.");
      }
    }
  };

  if (status === "loading") {
    return (
      <div className="loading-placeholder">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "setup") {
    return (
      <PinForm
        key="setup"
        mode="setup"
        feedback={feedback}
        onSubmit={handleSetup}
      />
    );
  }

  if (status === "locked") {
    if (resetting) {
      return (
        <PinForm
          key="reset"
          mode="reset"
          feedback={feedback}
          onSubmit={handleReset}
          onBackToPin={() => {
            setFeedback("");
            setResetting(false);
          }}
        />
      );
    }
    return (
      <PinForm
        key="enter"
        mode="enter"
        feedback={feedback}
        onSubmit={handleVerify}
        onForgot={() => {
          setFeedback("");
          setResetting(true);
        }}
      />
    );
  }

  // unlocked: render whichever parent page the URL matched
  return <Outlet />;
}
