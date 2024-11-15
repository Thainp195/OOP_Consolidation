//class FullTimeEmployee//
import { Employee } from './Employee'; // Import the base class

export class FullTimeEmployee extends Employee {
    private bonusPercentage: number; // Bonus percentage

    constructor(name: string, baseSalary: number, bonusPercentage: number) {
        super(name, baseSalary); // Call the parent constructor
        this.bonusPercentage = bonusPercentage; // Set bonus percentage
    }

    // Override calculateBonus to use the specific bonus percentage
    protected calculateBonus(): number {
        return this.baseSalary * this.bonusPercentage; 
    }

    // Overloading calculateSalary
    public calculateSalary(): number; // Method declaration for no parameters
    public calculateSalary(additionalBonus: number): number; // Overloaded version for additional bonus
    public calculateSalary(additionalBonus?: number): number { // Implementation
        const baseSalary = super.calculateSalary(); // Call parent's calculateSalary
        if (additionalBonus !== undefined) {
            return baseSalary + additionalBonus; // Add additional bonus if provided
        }
        return baseSalary; // Return base salary if no additional bonus
    }
}