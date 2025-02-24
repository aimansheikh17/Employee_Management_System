import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../componenets/Style/DeleteEmployee.css';

export default function DeleteEmployee() {
    const navigate = useNavigate();
    const [employeeId, setEmployeeId] = useState("");
    const [employee, setEmployee] = useState(null);
    const [message, setMessage] = useState("");

    // Fetch employee details before deletion
    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:9090/api/employees/${employeeId}`);
            setEmployee(response.data);
            setMessage("");
        } catch (error) {
            setEmployee(null);
            setMessage("Employee not found. Please check the ID.");
        }
    };

    // Delete employee
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:9090/api/employees/delete/${employeeId}`);
            alert("Employee deleted successfully!");
            navigate("/");
        } catch (error) {
            setMessage("Error deleting employee. Please try again.");
        }
    };

    return (
        <div className="delete-container">
            <h2 className="delete-employee1">Delete Employee</h2>

            <input
                className="input1"
                type="text"
                placeholder="Enter Employee ID"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
            />
            
            <button onClick={handleSearch} className="search-btn">Search Employee</button>

            {message && <p className="message">{message}</p>}

            {employee && (
                <div className="employee-details">
                    <p><strong>Name:</strong> {employee.name}</p>
                    <p><strong>Email:</strong> {employee.email}</p>
                    <p><strong>Department:</strong> {employee.department}</p>
                    <p><strong>Salary:</strong> ${employee.salary}</p>
                    <button onClick={handleDelete} className="delete-btn">Delete Employee</button>
                </div>
            )}

            <button className="back-btn1" onClick={() => navigate('/')}>Back</button>
        </div>
    );
}

 