package com.lyndsey.littlecreatures.little_creatures_backend.DTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class PinResetRequestDTO {
    @NotBlank
    private String password;

    @NotBlank
    @Pattern(regexp = "\\d{4}", message = "PIN must be exactly 4 digits")
    private String newPin;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNewPin() {
        return newPin;
    }

    public void setNewPin(String newPin) {
        this.newPin = newPin;
    }
}
