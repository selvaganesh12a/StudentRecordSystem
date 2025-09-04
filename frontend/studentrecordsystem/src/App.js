import "./App.css";
import { useState, useEffect, use } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import Navbar from "./components/Navbar";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  addStudent,
  getAllstudents,
  deleteStudent,
  updateStudent,
} from "./services/studentService";

function App() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

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

  function handleDeleteStudent(studentId) {
    deleteStudent(studentId)
      .then(() => getAllstudents())
      .then((response) => {
        setStudents(response.data);
      });
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<h1>Welcome to Student Management System</h1>}
        />
        <Route
          path="/studentlist"
          element={
            <StudentList
              students={students}
              handleDeleteStudent={handleDeleteStudent}
            />
          }
        />
        <Route
          path="/addstudent"
          element={
            <StudentForm
              mode="add"
              setStudents={setStudents}
            />
          }
        />
        <Route
          path="/editstudent/:id"
          element={
            <StudentForm
              mode="edit"
              students={students}
              setStudents={setStudents}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
