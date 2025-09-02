import "./App.css";
import { useState, useEffect, use } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import Navbar from "./components/Navbar";
import { addStudent, getAllstudents } from "./services/studentService";

function App() {
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState("view");
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    getAllstudents()
      .then((response) => {
        setStudents(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching students:", error);
      });
  }, []);

  function handleAddStudent(newStudent) {
    addStudent(newStudent)
      .then(() => getAllstudents())
      .then((response) => {
        setStudents(response.data);
      });
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
