import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../componenets/Style/HomePage1.css';

export default function HomePage1() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <h1>Welcome To Employee Management System</h1>
      <div className="button-container">
        <button className="add" onClick={() => navigate('/add')}>Add Employee</button>
        <button className="delete" onClick={() => navigate('/delete-employee')}>Delete Employee</button>
        <button className="update" onClick={() => navigate('/update-employee')}>Update Employee</button>
        <button className="fetchAllEmployee" onClick={() => navigate('/fetchAllEmployee')}>Fetch All Employees</button>
        <button className="fetchEmployeeById" onClick={() => navigate('/fetchemployeebyid')}>Fetch Employee by ID</button>
        
      </div>
    </div>
  );
}

