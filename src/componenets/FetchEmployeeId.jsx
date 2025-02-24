import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../componenets/Style/FetchEmployeeById.css";

export default function FetchEmployeeById() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const fetchEmployee = async () => {
    if (!id.trim()) {
      setError("Please enter an Employee ID.");
      setEmployee(null);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:9090/api/employees/${id}`);
      setEmployee(response.data);
      setError("");
    } catch (err) {
      setEmployee(null);
      if (err.response && err.response.status === 404) {
        setError("Employee not found. Please check the ID.");
      } else {
        setError("Server error. Please try again later.");
      }
    } finally {
      setHasSearched(true);
    }
  };

  return (
    <div className="fetch-employee-id-container1">
      <h2 className="fetch-employee-id">Fetch Employee by ID</h2>
      <input
        type="text"
        placeholder="Enter Employee ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="input"
      />
      <div className="button-container5">
        <button onClick={fetchEmployee} className="fetch-btn4">
          Fetch Employee
        </button>
        <button onClick={() => navigate("/")} className="backfetch-btn3">
          Back
        </button>
      </div>

      {hasSearched && (
        <div className="employee-info5">
          {employee ? (
            <div className="employee-details3">
              <h3>Employee Details</h3>
              <p><strong>ID:</strong> {employee.id}</p>
              <p><strong>Name:</strong> {employee.name}</p>
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>Department:</strong> {employee.department}</p>
              <p><strong>Salary:</strong> ${employee.salary}</p>
            </div>
          ) : (
            <p className="error-message">{error}</p>
          )}
        </div>
      )}
    </div>
  );
}



