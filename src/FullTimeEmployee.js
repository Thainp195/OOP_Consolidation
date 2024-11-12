"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullTimeEmployee = void 0;
const Employee_1 = require("./Employee");
// Subclass FullTimeEmployee inherits from Employee
class FullTimeEmployee extends Employee_1.Employee {
    constructor(name, baseSalary, bonus) {
        super(name, baseSalary); // Call the parent class constructor
        this.bonus = bonus;
    }
    // Override the salary calculation method from the parent class
    calculateSalary() {
        return super.calculateSalary() + this.bonus; // Calculate salary including bonus
    }
}
exports.FullTimeEmployee = FullTimeEmployee;
