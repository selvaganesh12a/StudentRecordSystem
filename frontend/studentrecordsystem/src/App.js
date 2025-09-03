import "./App.css";
import { useState, useEffect, use } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import Navbar from "./components/Navbar";
import { addStudent, getAllstudents, deleteStudent, updateStudent } from "./services/studentService";

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
    updateStudent(updatedStudent.id, updatedStudent)
      .then(() => getAllstudents())
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Update failed:", error));
    setMode("view");
    setEditingStudent(null);
  }

  function handleDeleteStudent(studentId) {
    deleteStudent(studentId)
      .then(() => getAllstudents())
      .then((response) => {
        setStudents(response.data);
      });
    setMode("view");
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
