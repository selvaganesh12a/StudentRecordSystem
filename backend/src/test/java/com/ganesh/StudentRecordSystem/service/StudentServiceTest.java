package com.ganesh.StudentRecordSystem.service;

import com.ganesh.StudentRecordSystem.entity.Student;
import com.ganesh.StudentRecordSystem.repository.StudentRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class StudentServiceTest {

    @Autowired
    private StudentService studentService;

    @MockitoBean
    private StudentRepository studentRepository;

    @BeforeEach
    void setUp() {
        Student student =
                Student.builder()
                        .name("Selva Ganesh")
                        .id(1L)
                        .age("21")
                        .email("selvaganesh@gmail.com")
                        .course("IT")
                        .nativePlace("Thoothukudi")
                        .phone("9876543210")
                        .build();
        Mockito.when(studentRepository.findByNameIgnoreCase("Selva Ganesh"))
                .thenReturn(student);
    }

    @Test
    @DisplayName("Get Data based on Valid Student Name")
    public void whenValidStudentName_thenStudentShouldFound() {
        String studentName = "Selva Ganesh";
        Student found =
                studentService.fetchStudentByName(studentName);
        assertEquals(studentName,found.getName());
    }
}