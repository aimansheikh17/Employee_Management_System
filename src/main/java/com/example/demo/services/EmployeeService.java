package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Employee;
import com.example.demo.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
    @Autowired
	EmployeeRepository empRepo;
    
    // create employees
    public Employee saveEmployee(Employee employee) {
    	return empRepo.save(employee);
    }
    
    // get all employees
    public List<Employee> getAllEmployees() {
    	return empRepo.findAll();
    }
    
    // get employee by id
    public Optional<Employee> getEmployeeById(int id) {
    	return empRepo.findById(id);
    }
    
    // update Employee
    public Employee updateEmployee(int id, Employee employeeDetails) {
    	return empRepo.findById(id).map(employee -> {
    		employee.setName(employeeDetails.getName());
    		employee.setEmail(employeeDetails.getEmail());
    		employee.setDepartment(employeeDetails.getDepartment());
    		employee.setSalary(employeeDetails.getSalary());
    		return empRepo.save(employee);
    	}).orElseThrow(()-> new RuntimeException("Employee not found with id: " + id));
    }
	
    // delete Employee
    public void deleteEmployee(int id) {
        if (empRepo.existsById(id)) {
            empRepo.deleteById(id);
        } else {
            throw new RuntimeException("Employee not found with ID: " + id);
        }
    }
    
}
