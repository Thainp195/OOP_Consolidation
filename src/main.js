"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FullTimeEmployee_1 = require("./FullTimeEmployee");
const PartTimeEmployee_1 = require("./PartTimeEmployee");
const Department_1 = require("./Department");
// Create a new department
const department = new Department_1.Department();
// Create full-time and part-time employees
const fullTimeEmp = new FullTimeEmployee_1.FullTimeEmployee("ThaiNguyen", 5000, 1000);
const partTimeEmp = new PartTimeEmployee_1.PartTimeEmployee("PhiCao", 20, 80);
// Add employees to the department
department.addEmployee(fullTimeEmp);
department.addEmployee(partTimeEmp);
// Display the list of employees and their salaries
department.showEmployees();
