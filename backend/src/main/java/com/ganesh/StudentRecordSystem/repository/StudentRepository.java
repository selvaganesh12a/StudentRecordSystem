package com.ganesh.StudentRecordSystem.repository;

import com.ganesh.StudentRecordSystem.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    public Student findByStudentName(String studentName);

    public Student findByStudentNameIgnoreCase(String studentName);
}
