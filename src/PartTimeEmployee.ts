import { Employee } from './Employee';

// Subclass PartTimeEmployee inherits from Employee
export class PartTimeEmployee extends Employee {
    private hoursWorked: number; // Number of hours worked
    private hourlyRate: number;   // Hourly wage rate

    constructor(name: string, hourlyRate: number, hoursWorked: number) {
        super(name, hourlyRate * hoursWorked); // Calculate salary based on hours worked
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }

    // Override the salary calculation method from the parent class
    public calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked; // Calculate salary based on hours
    }
}