import axios from "axios";

const API_URL = "http://localhost:8080";

export const getAllstudents = () => axios.get(`${API_URL}/getStudents`);

export const getStudentById = (id) => axios.get(`${API_URL}/getStudent/${id}`);

export const addStudent = (student) =>
  axios.post(`${API_URL}/storeStudents`, student);

export const updateStudent = (id, student) =>
  axios.put(`${API_URL}/updateStudent/${id}`, student);

export const deleteStudent = (id) =>
  axios.delete(`${API_URL}/deleteStudent/${id}`);
