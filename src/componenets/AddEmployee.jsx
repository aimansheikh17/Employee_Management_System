import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../componenets/Style/AddEmployee.css";

export default function AddEmployee() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
  });
  const [message, setMessage] = useState(""); // Added message state

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9090/api/employees/create", employee);
      setMessage("Employee added successfully!"); // Set success message
      setEmployee({ name: "", email: "", department: "", salary: "" }); // Clear form
    } catch (error) {
      setMessage("Error adding employee. Please try again.");
    }
  };

  return (
    <div className="add-container">
      <h2>Add Employee</h2>
      {message && <p className="message-container">{message}</p>} {/* Message display */}
      
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={employee.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={employee.email} onChange={handleChange} required />


        <label>Department:</label>
        <input type="text" name="department" value={employee.department} onChange={handleChange} required />

      
        <label>Salary:</label>
        <input type="number" name="salary" value={employee.salary} onChange={handleChange} required />

        <button type="submit" className="add-employee">Add Employee</button>
        <button type="button" className="back-btn" onClick={() => navigate("/")}>
          Back
        </button>
      </form>
    </div>
  );
};
