import { Employee } from './Employee';

// Subclass FullTimeEmployee inherits from Employee
export class FullTimeEmployee extends Employee {
    private bonusPercentage: number; // Bonus percentage based on base salary (private)

    constructor(name: string, baseSalary: number, bonusPercentage: number) {
        super(name, baseSalary); // Call the parent class constructor
        this.bonusPercentage = bonusPercentage;
    }

    // Override the salary calculation method from the parent class (public)
    public calculateSalary(): number {
        const baseSalary = super.calculateSalary(); // Call parent's calculateSalary
        const bonus = this.calculateBonus(); // Calculate bonus
        const deductions = this.calculateDeductions(); // Calculate deductions

        // Calculate salary including base, bonus, and deductions
        return baseSalary + bonus - deductions; 
    }

    // Overloaded method for calculating bonus (protected)
    protected calculateBonus(): number {
        return super.calculateBonus() + (this.bonusPercentage * super.calculateSalary()); // Include additional bonus
    }

    // Overloaded method for calculating deductions (protected)
    protected calculateDeductions(): number {
        return super.calculateDeductions(); // Call parent's deductions calculation
    }
}
