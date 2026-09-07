package com.lyndsey.littlecreatures.little_creatures_backend.model;

import jakarta.persistence.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Parent {
    @Id
    @GeneratedValue
    private int parentId;

    private String email;
    private String pwHash;
    private String firstName;
    private String lastName;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "parent")
    private List<Child> childList = new ArrayList<>();

    public Parent() {
    }

    public Parent(String email, String password, String firstName, String lastName) {
        this.email = email;
        this.pwHash = encoder.encode(password);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public int getParentId() {
        return parentId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPwHash() {
        return pwHash;
    }

    public void setPwHash(String password) {
        this.pwHash = encoder.encode(password);
    }

    public boolean isMatchingPassword(String password) { return encoder.matches(password, pwHash);}

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<Child> getChildList() {
        return childList;
    }

    public void addChild(Child child) {
        this.childList.add(child);
        child.setParent(this);
    }
}
