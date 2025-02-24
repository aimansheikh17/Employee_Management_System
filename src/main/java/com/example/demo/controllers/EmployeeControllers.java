package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Employee;
import com.example.demo.services.EmployeeService;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "*")
public class EmployeeControllers {

	@Autowired
	EmployeeService empServ;
	
	@PostMapping("/create")
	public Employee createEmployee(@RequestBody Employee employee) {
		return empServ.saveEmployee(employee);
	}
	
	@GetMapping("/allEmployees")
	public List<Employee> getAllEmployees() {
		return empServ.getAllEmployees();
	}
	
	@GetMapping("/{id}")
	public Optional<Employee> getEmployeeById(@PathVariable String id) {
	    try {
	        int employeeId = Integer.parseInt(id);
	        return empServ.getEmployeeById(employeeId);
	    } catch (NumberFormatException e) {
	        throw new IllegalArgumentException("Invalid Employee ID: " + id);
	    }
	}

	
	@PutMapping("/update/{id}")
	public Employee updateEmployee(@PathVariable int id, @RequestBody Employee updateEmployee) {
		return empServ.updateEmployee(id, updateEmployee);
		
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteEmployee(@PathVariable int id) {
		empServ.deleteEmployee(id);
		return "Employee with Id: "+ id + " deleted successfully";	
	}
}
