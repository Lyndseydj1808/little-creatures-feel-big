package com.lyndsey.littlecreatures.little_creatures_backend.DTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ParentUpdatePasswordRequestDTO {
    @NotBlank
    @Size(min = 8, message = "Password must be at least 8 characters long")
    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
