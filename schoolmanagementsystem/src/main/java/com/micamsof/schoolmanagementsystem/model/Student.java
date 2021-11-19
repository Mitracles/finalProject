package com.micamsof.schoolmanagementsystem.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Student implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private String email;
    private String section;
    private String contact;
    private String imageUrl;
    @Column(nullable = false, updatable = false)
    private String studentNumber;

    public Student(String name, String email, String section, String contact, String imageUrl, String studentNumber) {
        this.name = name;
        this.email = email;
        this.section = section;
        this.contact = contact;
        this.imageUrl = imageUrl;
        this.studentNumber = studentNumber;
    }

    public Student() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getStudentNumber() {
        return studentNumber;
    }

    public void setStudentNumber(String studentNumber) {
        this.studentNumber = studentNumber;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", section='" + section + '\'' +
                ", contact='" + contact + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}