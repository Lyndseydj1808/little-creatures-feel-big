package com.lyndsey.littlecreatures.little_creatures_backend.DTO;

public class ChildResponseDTO {
    private int childId;
    private String name;
    private int age;
    private int starCount;
    private String creatureChoice;
    private int parentId;

    public int getChildId() {
        return childId;
    }

    public void setChildId(int childId) {
        this.childId = childId;
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

    public int getParentId() {
        return parentId;
    }

    public void setParentId(int parentId) {
        this.parentId = parentId;
    }
}
