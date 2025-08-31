import "./App.css";
import { useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import Navbar from "./components/Navbar";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      age: "20",
      phone: "123-456-7890",
      native: "USA",
      course: "Computer Science",
      email: "johndoe@demo.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: "22",
      phone: "987-654-3210",
      native: "Canada",
      course: "Mathematics",
      email: "janesmith@demo.com",
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: "21",
      phone: "555-555-5555",
      native: "UK",
      course: "Physics",
      email: "alicejohnson@demo.com",
    },
  ]);
  const [mode, setMode] = useState("view");
  const [editingStudent, setEditingStudent] = useState(null);

  function handleAddStudent(newStudent) {
    const studentWithId = {
      ...newStudent,
      id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
    };
    setStudents([...students, studentWithId]);
    setMode("view");
  }

  function handleEditStudent(student) {
    setEditingStudent(student);
    setMode("edit");
  }

  function handleUpdateStudent(updatedStudent) {
    const updatedStudents = students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    setStudents(updatedStudents);
    setMode("view");
    setEditingStudent(null);
  }

  function handleDeleteStudent(studentId) {
    const updatedStudents = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(updatedStudents);
  }

  function handleCancel() {
    setEditingStudent(null);
    setMode("view");
  }

  return (
    <div className="App">
      <Navbar setMode={setMode} />
      {mode === "view" ? (
        <StudentList
          students={students}
          handleEditStudent={handleEditStudent}
          handleDeleteStudent={handleDeleteStudent}
        />
      ) : mode === "add" ? (
        <StudentForm
          mode={mode}
          handleAddStudent={handleAddStudent}
          handleCancel={handleCancel}
        />
      ) : mode === "edit" ? (
        <StudentForm
          mode={mode}
          editingStudent={editingStudent}
          handleUpdateStudent={handleUpdateStudent}
          handleCancel={handleCancel}
        />
      ) : null}
    </div>
  );
}

export default App;

// Student object shape:
// {
//   id: number,
//   name: string,
//   age: string,
//   phone: string,
//   native: string,
//   course: string,
//   email: string
// }
