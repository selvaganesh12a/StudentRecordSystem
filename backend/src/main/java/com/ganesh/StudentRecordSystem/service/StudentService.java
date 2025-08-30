package com.ganesh.StudentRecordSystem.service;

import com.ganesh.StudentRecordSystem.entity.Student;
import com.ganesh.StudentRecordSystem.error.StudentNotFoundException;

import java.util.List;

public interface StudentService {
   public Student storeStudent(Student student);

  public List<Student> fetchStudentList();

  public Student fetchStudentById(Long studentId) throws StudentNotFoundException;

  public void deleteStudentById(Long studentId);

  public Student updateStudent(Long studentId, Student student);

  public Student fetchStudentByName(String studentName);
}
