 ### <h1> Employee Management System<h1>



 📌 **Project Overview**

The **Employee Management** System is a web application built using React.js for the frontend and Spring Boot for the backend. This system allows users to manage employee records with essential CRUD operations such as adding, updating, deleting, and fetching employee details.

---

### 🚀 Features

**Add Employee** – Create new employee records.

**Delete Employee** – Remove employees by ID.

**Fetch All Employees** – Retrieve a list of all employees.

**Update Employee** – Modify existing employee details.

**Fetch Employee by ID** – Get details of a specific employee.

---

**🛠 Tech Stack**

**Frontend (React.js, HTML, CSS)**

**React.js**

**HTML, CSS**

**Axios (for API calls)**

**React Router (for navigation)**

**Backend (Spring Boot, Java, SQL)**

**Spring Boot (REST API)**

**Spring Data JPA**

**MySQL (Database)**

---

**Spring Boot Security (if authentication is included)**

### 📂 Folder Structure

Employee-Management-System/
│── backend/                     # Spring Boot backend
│   ├── src/main/java/com/example/employeesystem/  # Java source code
│   ├── src/main/resources/      # Application properties
│   ├── pom.xml                  # Maven dependencies
│
│── frontend/                    # React.js frontend
│   ├── src/
│   │   ├── components/          # React components
│   │   ├── pages/               # Pages (Add, Update, Delete, etc.)
│   ├── public/
│   ├── package.json             # Node dependencies
│
│── README.md                    # Project documentation

---

### 💻 Setup & Installation

Backend Setup (Spring Boot)

### Clone the repository:

[git clone https://github.com/your-username/Employee-Management-System.git](https://github.com/aimansheikh17/Employee_Management_System.git)
cd Employee-Management-System/backend

### Configure the database in application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/employees_db
spring.datasource.username=root
spring.datasource.password=your_password

### Build and run the backend:

mvn spring-boot:run

Frontend Setup (React.js)

Navigate to the frontend directory:

cd ../frontend

Install dependencies:

npm install

Start the frontend:

npm start

🔗 API Endpoints

Method

Endpoint

Description

GET

/api/employees

Fetch all employees

GET

/api/employees/{id}

Fetch employee by ID

POST

/api/employees/add

Add a new employee

PUT

/api/employees/update/{id}

Update employee details

DELETE

/api/employees/delete/{id}

Delete an employee

---

### home page
![image](https://github.com/user-attachments/assets/7740280d-aed1-4de9-bc74-07790f8bfa2b)

---

### add page
![image](https://github.com/user-attachments/assets/eb668c43-2f71-4c37-8cad-622f4845bf0b)

---

### delete employee page
![image](https://github.com/user-attachments/assets/21200360-f73f-41d6-8716-6b1b27193892)

---

### fetch employee by id page
![image](https://github.com/user-attachments/assets/36ca2008-2e87-4605-ad9f-e4832338418c)

---

### update employee by id page
![image](https://github.com/user-attachments/assets/9de695d5-b0e3-43ca-8d18-c7def9102ac8)

---

### fetch all employees pag
![image](https://github.com/user-attachments/assets/a5b71ff9-ed56-491f-9ec9-7e0a8bab32de)


### 📝 License

This project is open-source and available for personal or educational use. Feel free to contribute or modify it as needed.

✨ Author

***Your Name:*** Mohammed Aiman

***GitHub:*** your-username

Enjoy coding! 🚀
