package com.micamsof.schoolmanagementsystem.repository;

import com.micamsof.schoolmanagementsystem.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TeacherRepo extends JpaRepository<Teacher, Long> {
    void deleteTeacherById(Long id);

    Optional<Teacher> findTeacherById(Long id);
}
