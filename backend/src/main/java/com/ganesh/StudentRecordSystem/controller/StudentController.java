package com.ganesh.StudentRecordSystem.controller;

import com.ganesh.StudentRecordSystem.entity.Student;
import com.ganesh.StudentRecordSystem.error.StudentNotFoundException;
import com.ganesh.StudentRecordSystem.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/storeStudents")
    public Student saveStudent(@Valid @RequestBody Student student){
        return studentService.storeStudent(student);
    }

    @GetMapping("/getStudents")
    public List<Student> fetchStudentList(){
        return studentService.fetchStudentList();
    }

    @GetMapping("/getStudents/{id}")
    public Student fetchStudentById(@PathVariable("id") Long studentId) throws StudentNotFoundException {
        return studentService.fetchStudentById(studentId);
    }

    @DeleteMapping("/deleteStudents/{id}")
    public String deleteStudentById(@PathVariable("id") Long studentId){
        studentService.deleteStudentById(studentId);
        return "Student deleted Successfully";
    }

    @PutMapping("/updateStudent/{id}")
    public Student updateStudent(@PathVariable("id") Long studentId,
                                 @RequestBody Student student){
        return studentService.updateStudent(studentId,student);
    }

    @GetMapping("/getStudents/name/{name}")
    public Student fetchStudentNameByName(@PathVariable("name") String studentName){
        return studentService.fetchStudentByName(studentName);
    }
}
