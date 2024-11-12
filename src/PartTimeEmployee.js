"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartTimeEmployee = void 0;
const Employee_1 = require("./Employee");
// Subclass PartTimeEmployee inherits from Employee
class PartTimeEmployee extends Employee_1.Employee {
    constructor(name, hourlyRate, hoursWorked) {
        super(name, hourlyRate * hoursWorked); // Calculate salary based on hours worked
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }
    // Override the salary calculation method from the parent class
    calculateSalary() {
        return this.hourlyRate * this.hoursWorked; // Calculate salary based on hours
    }
}
exports.PartTimeEmployee = PartTimeEmployee;
