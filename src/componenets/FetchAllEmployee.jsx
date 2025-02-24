import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../componenets/Style/FetchAllEmployee.css";

export default function FetchAllEmployees() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(""); // Added error state

  useEffect(() => {
    axios
      .get("http://localhost:9090/api/employees/allEmployees")
      .then((response) => {
        setEmployees(response.data);
        setError(""); // Clear error if successful
      })
      .catch((error) => {
        setError("Failed to fetch employees. Please try again.");
      });
  }, []);

  return (
    <div className="fetch-all-container">
      <h1 className="all-employee">All Employees</h1>

      {error && <p className="error-message">{error}</p>} {/* Error message display */}

      {employees.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
                <td>{employee.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !error && <p>No employees found.</p>
      )}

      <button onClick={() => navigate('/')} className="all-back">Back</button>
    </div>
  );
};
