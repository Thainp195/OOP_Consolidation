import { FullTimeEmployee } from './src/FullTimeEmployee'; // Import the FullTimeEmployee class
import { PartTimeEmployee } from './src/PartTimeEmployee'; // Import the PartTimeEmployee class
import { Department } from './src/Department'; // Import the Department class

// Create a new department
const department = new Department();

// Create a full-time employee with name, base salary, and bonus
const fullTimeEmp = new FullTimeEmployee("ThaiNguyen", 5000, 1000);

// Create a part-time employee with name, hourly rate, and hours worked
const partTimeEmp = new PartTimeEmployee("PhiCao", 20, 80);

// Add employees to the department
department.addEmployee(fullTimeEmp);
department.addEmployee(partTimeEmp);

// Display the list of employees and their salaries
department.showEmployees();
