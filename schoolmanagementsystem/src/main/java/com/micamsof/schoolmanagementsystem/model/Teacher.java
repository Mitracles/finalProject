package com.micamsof.schoolmanagementsystem.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Teacher implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String teachername;
    private String teacheremail;
    private String teachercontact;
    private String teacherimageUrl;
    @Column(nullable = false, updatable = false)
    private String facultyNumber;

    public Teacher(String teachername, String teacheremail, String teachercontact, String teacherimageUrl, String facultyNumber) {
        this.teachername = teachername;
        this.teacheremail = teacheremail;
        this.teachercontact = teachercontact;
        this.teacherimageUrl = teacherimageUrl;
        this.facultyNumber = facultyNumber;
    }

    public Teacher() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTeachername() {
        return teachername;
    }

    public void setTeachername(String teachername) {
        this.teachername = teachername;
    }

    public String getTeacheremail() {
        return teacheremail;
    }

    public void setTeacheremail(String teacheremail) {
        this.teacheremail = teacheremail;
    }

    public String getTeachercontact() {
        return teachercontact;
    }

    public void setTeachercontact(String teachercontact) {
        this.teachercontact = teachercontact;
    }

    public String getTeacherimageUrl() {
        return teacherimageUrl;
    }

    public void setTeacherimageUrl(String teacherimageUrl) {
        this.teacherimageUrl = teacherimageUrl;
    }

    public String getFacultyNumber() {
        return facultyNumber;
    }

    public void setFacultyNumber(String facultyNumber) {
        this.facultyNumber = facultyNumber;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "id=" + id +
                ", teachername='" + teachername + '\'' +
                ", teacheremail='" + teacheremail + '\'' +
                ", teachercontact='" + teachercontact + '\'' +
                ", teacherimageUrl='" + teacherimageUrl + '\'' +
                '}';
    }
}
