package com.ganesh.StudentRecordSystem.service;

import com.ganesh.StudentRecordSystem.entity.Student;
import com.ganesh.StudentRecordSystem.error.StudentNotFoundException;
import com.ganesh.StudentRecordSystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student storeStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> fetchStudentList() {
        return studentRepository.findAll();
    }

    @Override
    public Student fetchStudentById(Long studentId) throws StudentNotFoundException {
        Optional<Student> student =  studentRepository.findById(studentId);

        if(!student.isPresent()) {
            throw new StudentNotFoundException("Student Not Available");
        }

        return student.get();
    }

    @Override
    public void deleteStudentById(Long studentId) {
        studentRepository.deleteById(studentId);
    }

    @Override
    public Student updateStudent(Long studentId, Student student) {
        Student stDB = studentRepository.findById(studentId).get();

        if(Objects.nonNull(student.getName()) &&
        !"".equalsIgnoreCase(student.getName())){
            stDB.setName(student.getName());
        }

        if(Objects.nonNull(student.getPhone()) &&
                !"".equalsIgnoreCase(student.getPhone())){
            stDB.setPhone(student.getPhone());
        }

        if(Objects.nonNull(student.getNativePlace()) &&
                !"".equalsIgnoreCase(student.getNativePlace())){
            stDB.setNativePlace(student.getNativePlace());
        }

        if(Objects.nonNull(student.getAge()) &&
                !"".equalsIgnoreCase(student.getAge())){
            stDB.setAge(student.getAge());
        }

        return studentRepository.save(stDB);
    }

    @Override
    public Student fetchStudentByName(String studentName) {
        return studentRepository.findByNameIgnoreCase(studentName);
    }
}
