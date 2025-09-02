import "../styles/studentlist.module.css";
function StudentList(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Phone Number</th>
          <th>Native</th>
          <th>Course</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.students.map((student) => (
          <tr key={student.id}>
            <td>{student.studentId}</td>
            <td>{student.studentName}</td>
            <td>{student.age}</td>
            <td>{student.phoneNumber}</td>
            <td>{student.native}</td>
            <td>{student.course}</td>
            <td>{student.email}</td>
            <td>
              <button onClick={() => props.handleEditStudent(student)}>
                Edit
              </button>
              <button onClick={() => props.handleDeleteStudent(student.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;
