import { Employee } from './Employee';

// Department class to manage employees
export class Department {
    private employees: Employee[] = []; // Employee list, private property

    // Method to add an employee to the list
    public addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    // Method to display employee information
    public showEmployees() {
        this.employees.forEach(emp => {
            console.log(`Name: ${emp.getName()}, Salary: ${emp.calculateSalary()}`); // Call public methods
        });
    }
}