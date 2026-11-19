package com.lyndsey.littlecreatures.little_creatures_backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// 403: you are logged in, but the parental PIN has not been entered (or has timed out)
@ResponseStatus(HttpStatus.FORBIDDEN)
public class PinRequiredException extends RuntimeException {
    public PinRequiredException(String message) {
        super(message);
    }
}
