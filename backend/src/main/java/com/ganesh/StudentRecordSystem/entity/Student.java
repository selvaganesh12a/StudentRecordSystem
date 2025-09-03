package com.ganesh.StudentRecordSystem.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Student {
    @Id
    @SequenceGenerator(
            name = "generator",
            sequenceName = "sequencegenerator"
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "sequencegenerator")
    private Long id;

    @NotBlank(message = "Add Student Name")
    private String name;

    private String age;
    private String phone;
    private String nativePlace;
    private String course;
    private String email;
}
