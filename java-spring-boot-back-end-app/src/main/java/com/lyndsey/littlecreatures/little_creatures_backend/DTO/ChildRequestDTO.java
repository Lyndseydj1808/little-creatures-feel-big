package com.lyndsey.littlecreatures.little_creatures_backend.DTO;

import jakarta.validation.constraints.NotBlank;

public class ChildRequestDTO {
    @NotBlank
    private String name;
    private int age;
    private int starCount;
    @NotBlank
    private String creatureChoice;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getStarCount() {
        return starCount;
    }

    public void setStarCount(int starCount) {
        this.starCount = starCount;
    }

    public String getCreatureChoice() {
        return creatureChoice;
    }

    public void setCreatureChoice(String creatureChoice) {
        this.creatureChoice = creatureChoice;
    }
}
