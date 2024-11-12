import { FullTimeEmployee } from './FullTimeEmployee';
import { PartTimeEmployee } from './PartTimeEmployee';
import { Department } from './Department';

// Create a new department
const department = new Department();

// Create full-time and part-time employees
const fullTimeEmp = new FullTimeEmployee("ThaiNguyen", 5000, 1000);
const partTimeEmp = new PartTimeEmployee("PhiCao", 20, 80);

// Add employees to the department
department.addEmployee(fullTimeEmp);
department.addEmployee(partTimeEmp);

// Display the list of employees and their salaries
department.showEmployees();