import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage1 from './componenets/HomePage1'
import AddEmployee from './componenets/AddEmployee'
import DeleteEmployee from './componenets/DeleteEmployee';
import FetchEmployeeById from './componenets/FetchEmployeeId';
import UpdateEmployee from './componenets/UpdateEmployee';
import FetchAllEmployees from './componenets/FetchAllEmployee';



export default function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage1/>}></Route>
        <Route path="/add" element={<AddEmployee/>}></Route>
        <Route path="/delete-employee" element={<DeleteEmployee/>}></Route>
        <Route path ="/fetchemployeebyid" element={<FetchEmployeeById/>}></Route>
        <Route path ="/update-employee" element={<UpdateEmployee/>}></Route>
        <Route path ="/fetchAllemployee" element={<FetchAllEmployees/>}></Route>
         
        </Routes>
      </Router>
    </div>
  )
}


