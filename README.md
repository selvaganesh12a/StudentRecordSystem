# Student Record System

The **Student Record System** is a Spring Boot-based web application that allows users to manage student information efficiently. This system supports functionalities such as adding, viewing, updating, and deleting student records using RESTful APIs.

---

## 🚀 Features

- Add a new student record
- Retrieve all students or individual student details
- Update existing student information
- Delete student records
- Exception handling for invalid operations
- Layered architecture using Controller, Service, and Repository

---

## 🛠️ Technologies Used

- Java 17+
- Spring Boot
- Spring Data JPA
- Maven
- MySQL (or any other DB can be configured)
- RESTful Web Services

---

## 📁 Project Structure

```
StudentRecordSystem/
├── src/
│   ├── main/
│   │   ├── java/com/ganesh/StudentRecordSystem/
│   │   │   ├── controller/
│   │   │   ├── entity/
│   │   │   ├── error/
│   │   │   ├── repository/
│   │   │   ├── service/
│   │   │   └── StudentRecordSystemApplication.java
│   │   └── resources/
│   │       ├── application.properties
│   │       ├── static/
│   │       └── templates/
│   └── test/
│       └── java/...
├── pom.xml
└── README.md
```

---

## 🧑‍💻 Getting Started

### Prerequisites

- Java 17 or higher
- Maven
- MySQL (or preferred database)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/StudentRecordSystem.git
   cd StudentRecordSystem
   ```

2. Configure your database settings in `application.properties`:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   ```

3. Build and run the project:

   ```bash
   ./mvnw spring-boot:run
   ```

---

## 📬 API Endpoints

| Method | Endpoint               | Description            |
|--------|------------------------|------------------------|
| GET    | /students              | Get all students       |
| GET    | /students/{id}         | Get student by ID      |
| POST   | /students              | Add new student        |
| PUT    | /students/{id}         | Update student         |
| DELETE | /students/{id}         | Delete student         |

---

## 🧑 Author

**Selva Ganesh**  
[LinkedIn](https://www.linkedin.com/in/selva-ganesh-v-offic/) | [GitHub](https://github.com/selvaganesh12a)

---
