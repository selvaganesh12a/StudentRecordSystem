import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/studentform.module.css";
import {
  addStudent,
  getAllstudents,
  getStudentById,
  updateStudent,
} from "../services/studentService";
function StudentForm({ mode, setStudents }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    phone: "",
    nativePlace: "",
    course: "",
    email: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getStudentById(id)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((err) => console.log("Error fetching student:", err));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateStudent(id, formData)
        .then(() => getAllstudents())
        .then((response) => {
          setStudents(response.data);
          navigate("/studentlist");
        })
        .catch((err) => console.error("Update failed:", err));
    } else {
      addStudent(formData)
        .then(() => getAllstudents())
        .then((response) => {
          setStudents(response.data);
          navigate("/studentlist");
        })
        .catch((err) => console.error("Add failed:", err));
    }
  };

  return (
    <div>
      <h2>{id ? "Edit Student" : "Add Student"}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="age">Age : </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="phone">Phone Number : </label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="native">Native : </label>
        <input
          type="text"
          name="nativePlace"
          value={formData.nativePlace}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="course">Course : </label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <button type="submit">{id ? "Update" : "Add"}</button>
        <br />
        <button type="button" onClick={() => navigate("/studentlist")}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
