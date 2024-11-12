import { Employee } from './Employee';

// Subclass PartTimeEmployee inherits from Employee
export class PartTimeEmployee extends Employee {
    private hoursWorked: number; // Number of hours worked (private)
    private hourlyRate: number;   // Hourly wage rate (private)
    private overtimeHours: number; // Number of overtime hours (private)
    private overtimeRate: number;   // Overtime wage rate (private)

    constructor(name: string, hourlyRate: number, hoursWorked: number, overtimeHours: number = 0, overtimeRate: number = 1.5) {
        super(name, hourlyRate * hoursWorked); // Calculate base salary based on hours worked
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
        this.overtimeHours = overtimeHours;
        this.overtimeRate = overtimeRate;
    }

    // Override the salary calculation method from the parent class (public)
    public calculateSalary(): number {
        const baseSalary = this.hourlyRate * this.hoursWorked; // Calculate base salary
        const overtimePay = this.overtimeHours * this.hourlyRate * this.overtimeRate; // Calculate overtime pay

        // Calculate total salary including base, overtime, bonus, and deductions
        return baseSalary + overtimePay + this.calculateBonus() - this.calculateDeductions();
    }

    // Overloaded method for calculating bonus (protected)
    protected calculateBonus(): number {
        // Custom bonus calculation for part-time employees
        return this.hourlyRate * this.hoursWorked * 0.10; // Default: 10% of base salary
    }

    // Overloaded method for calculating deductions (protected)
    protected calculateDeductions(): number {
        // Custom deduction calculation for part-time employees
        return this.hourlyRate * this.hoursWorked * 0.05; // Default: 5% of base salary
    }
}
