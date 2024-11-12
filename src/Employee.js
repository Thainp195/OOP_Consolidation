"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
// Base class Employee
class Employee {
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    // Method to calculate salary, can be overridden
    calculateSalary() {
        return this.baseSalary;
    }
    // Public method to get the employee's name
    getName() {
        return this.name;
    }
}
exports.Employee = Employee;
