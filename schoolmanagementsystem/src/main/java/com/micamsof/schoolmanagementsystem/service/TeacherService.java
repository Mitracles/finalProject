package com.micamsof.schoolmanagementsystem.service;

import com.micamsof.schoolmanagementsystem.exception.UserNotFoundException;
import com.micamsof.schoolmanagementsystem.model.Teacher;
import com.micamsof.schoolmanagementsystem.repository.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
public class TeacherService {
    private final TeacherRepo teacherRepo;

    @Autowired
    public TeacherService(TeacherRepo teacherRepo) {
        this.teacherRepo = teacherRepo;
    }

    public Teacher addTeacher(Teacher teacher){
        teacher.setFacultyNumber(UUID.randomUUID().toString());
        return teacherRepo.save(teacher);
    }

    public List<Teacher> findAllTeachers(){
        return teacherRepo.findAll();
    }

    public Teacher updateTeacher(Teacher teacher){
        return teacherRepo.save(teacher);
    }

    public Teacher findTeacherById(Long id){
        return teacherRepo.findTeacherById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    @Transactional
    public void deleteTeacher(Long id){
        teacherRepo.deleteTeacherById(id);
    }

}
