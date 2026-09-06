package com.lyndsey.littlecreatures.little_creatures_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Child {
    @Id
    @GeneratedValue
    private int childId;
    private String name;
    private int age;
    private int starCount;
    private String creatureChoice;

    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Parent parent;

    public Child() {
    }

    public Child(String name, int age, int starCount, String creatureChoice) {
        this.name = name;
        this.age = age;
        this.starCount = starCount;
        this.creatureChoice = creatureChoice;
    }

    public int getChildId() {
        return childId;
    }

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

    public Parent getParent() {
        return parent;
    }

    public void setParent(Parent parent) {
        this.parent = parent;
    }
}
