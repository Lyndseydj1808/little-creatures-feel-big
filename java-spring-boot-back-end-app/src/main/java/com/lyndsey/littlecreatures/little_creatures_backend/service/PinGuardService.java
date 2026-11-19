package com.lyndsey.littlecreatures.little_creatures_backend.service;

import com.lyndsey.littlecreatures.little_creatures_backend.exceptions.PinRequiredException;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Service;

// The "bouncer" for the parent dashboard: remembers, per session, when the PIN was last entered correctly.
@Service
public class PinGuardService {

    private static final String PIN_VERIFIED_AT = "pinVerifiedAt";
    // Unlock expires after 10 minutes of no guarded activity
    private static final long UNLOCK_MILLIS = 10 * 60 * 1000L;

    public void markVerified(HttpSession session) {
        session.setAttribute(PIN_VERIFIED_AT, System.currentTimeMillis());
    }

    public void lock(HttpSession session) {
        session.removeAttribute(PIN_VERIFIED_AT);
    }

    public boolean isUnlocked(HttpSession session) {
        Long verifiedAt = (Long) session.getAttribute(PIN_VERIFIED_AT);
        return verifiedAt != null && System.currentTimeMillis() - verifiedAt < UNLOCK_MILLIS;
    }

    // Call at the top of any endpoint that should be PIN-protected
    public void requireUnlocked(HttpSession session) {
        if (!isUnlocked(session)) {
            throw new PinRequiredException("PIN required");
        }
        markVerified(session); // active use keeps the dashboard unlocked
    }
}
