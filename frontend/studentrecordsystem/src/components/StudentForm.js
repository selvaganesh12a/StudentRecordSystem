import { useState, useEffect } from "react";
import "../styles/studentform.module.css";
function StudentForm(props) {
  const [formData, setFormData] = useState({
    StudentId: props.editingStudent ? props.editingStudent.StudentId : null,
    studentName: props.editingStudent ? props.editingStudent.studentName : "",
    age: props.editingStudent ? props.editingStudent.age : "",
    PhoneNumber: props.editingStudent ? props.editingStudent.PhoneNumber : "",
    Native: props.editingStudent ? props.editingStudent.Native : "",
    course: props.editingStudent ? props.editingStudent.course : "",
    email: props.editingStudent ? props.editingStudent.email : "",
  });

  useEffect(() => {
    if (props.editingStudent) {
      setFormData(props.editingStudent);
    }
  }, [props.editingStudent]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.mode === "add") {
      props.handleAddStudent(formData);
    } else if (props.mode === "edit") {
      props.handleUpdateStudent(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name : </label>
      <input
        type="text"
        name="studentName"
        value={formData.studentName}
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
        name="PhoneNumber"
        value={formData.PhoneNumber}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="native">Native : </label>
      <input
        type="text"
        name="Native"
        value={formData.Native}
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
      <button type="submit">Submit</button>
      <br />
      <button type="button" onClick={props.handleCancel}>
        Cancel
      </button>
    </form>
  );
}

export default StudentForm;
