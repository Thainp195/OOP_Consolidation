"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
// Department class to manage employees
class Department {
    constructor() {
        this.employees = []; // Employee list, private property
    }
    // Method to add an employee to the list
    addEmployee(employee) {
        this.employees.push(employee);
    }
    // Method to display employee information
    showEmployees() {
        this.employees.forEach(emp => {
            console.log(`Name: ${emp.getName()}, Salary: ${emp.calculateSalary()}`); // Call public methods
        });
    }
}
exports.Department = Department;
