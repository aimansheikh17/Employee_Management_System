import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../componenets/Style/UpdateEmployee.css";

const UpdateEmployee = () => {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState("");
  const [employee, setEmployee] = useState(null);
  const [message, setMessage] = useState("");
  const [enabledFields, setEnabledFields] = useState({
    name: false,
    department: false,
    salary: false,
    email: false, // Email is read-only, but included for consistency
  });

  // Fetch employee data by ID
  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get(`http://localhost:9090/api/employees/${employeeId}`);
      setEmployee(response.data);
      setMessage("");
    } catch (error) {
      setEmployee(null);
      setMessage("Employee not found. Please check the ID.");
    }
  };

  const handleInputChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (field) => {
    setEnabledFields((prevFields) => ({
      ...prevFields,
      [field]: !prevFields[field],
    }));
  };

  // Update Employee
  const handleUpdate = async () => {
    if (!employee) {
      setMessage("No employee data to update.");
      return;
    }

    try {
      await axios.put(`http://localhost:9090/api/employees/update/${employeeId}`, employee);
      setMessage("Employee updated successfully!");
    } catch (error) {
      setMessage("Error updating employee. Please try again.");
    }
  };

  return (
    <div className="update-container7">
      <h2 className="heading3">Update Employee</h2>
      <div>
        <input
          type="text"
          placeholder="Enter Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <button onClick={fetchEmployeeData} className="fetch-button7">
          Fetch Data
        </button>
        <button className="back1-btn9" onClick={() => navigate("/")}>
          Back
        </button>
      </div>

      {employee && (
        <>
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input className="checkbox1"
                type="checkbox"
                checked={enabledFields.name}
                onChange={() => handleCheckboxChange("name")}
              />
              Name
            </label>
            <label>
              <input className="checkbox2"
                type="checkbox"
                checked={enabledFields.department}
                onChange={() => handleCheckboxChange("department")}
              />
              Department
            </label>
            <label>
              <input className="checkbox3"
                type="checkbox"
                checked={enabledFields.salary}
                onChange={() => handleCheckboxChange("salary")}
              />
              Salary
            </label>
          </div>

          <div>
            <label>Name:</label>
            <input className="name1"
              type="text"
              name="name"
              value={employee.name}
              onChange={handleInputChange}
              disabled={!enabledFields.name}
            />
          </div>
          <div>
            <label>Department:</label>
            <input className="department1"
              type="text"
              name="department"
              value={employee.department}
              onChange={handleInputChange}
              disabled={!enabledFields.department}
            />
          </div>
          <div>
            <label>Salary:</label>
            <input className="salary1"
              type="number"
              name="salary"
              value={employee.salary}
              onChange={handleInputChange}
              disabled={!enabledFields.salary}
            />
          </div>
          <div>
            <label>Email:</label>
            <input className="email1" type="email" value={employee.email} readOnly />
          </div>

          <div className="update-buttons4">
            <button className="update-btn4" onClick={handleUpdate}>
              Update Employee
            </button>
          
          </div>
        </>
      )}

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default UpdateEmployee;

