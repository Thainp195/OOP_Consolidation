import { Employee } from './Employee'; // Import the base class

export class PartTimeEmployee extends Employee {
    private hourlyRate: number; // Hourly rate
    private hoursWorked: number; // Hours worked

    constructor(name: string, hourlyRate: number, hoursWorked: number) {
        super(name, hourlyRate * hoursWorked); // Calculate base salary
        this.hourlyRate = hourlyRate; // Set hourly rate
        this.hoursWorked = hoursWorked; // Set hours worked
    }

    // Overloading calculateSalary
    public calculateSalary(): number; // Method declaration for default calculation
    public calculateSalary(hoursWorked: number): number; // Overloaded version for specific hours
    public calculateSalary(hoursWorked?: number): number { // Implementation
        if (hoursWorked !== undefined) {
            return this.hourlyRate * hoursWorked; // Calculate salary based on input hours
        }
        return this.hourlyRate * this.hoursWorked; // Default to stored hours
    }
}
