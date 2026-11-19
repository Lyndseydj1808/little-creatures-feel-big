package com.lyndsey.littlecreatures.little_creatures_backend.DTO;

public class PinStatusResponseDTO {
    private boolean hasPin;
    private boolean unlocked;

    public PinStatusResponseDTO(boolean hasPin, boolean unlocked) {
        this.hasPin = hasPin;
        this.unlocked = unlocked;
    }

    public boolean getHasPin() {
        return hasPin;
    }

    public boolean getUnlocked() {
        return unlocked;
    }
}
