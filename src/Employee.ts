// Base class Employee
export class Employee {
    private name: string; // Employee's name (private, not accessible outside)
    private baseSalary: number; // Base salary (private, not accessible outside)

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    // Method to calculate salary with a formula (public, accessible outside)
    public calculateSalary(): number {
        const bonus = this.calculateBonus(); // Calculate bonus
        const deductions = this.calculateDeductions(); // Calculate deductions
        // Salary formula: base salary + bonus - deductions
        return this.baseSalary + bonus - deductions;
    }

    // Method to calculate bonus, can be overridden (protected, accessible in subclasses)
    protected calculateBonus(): number {
        // Example: 10% of base salary
        return this.baseSalary * 0.10;
    }

    // Method to calculate deductions, can be overridden (protected, accessible in subclasses)
    protected calculateDeductions(): number {
        // Example: 5% of base salary
        return this.baseSalary * 0.05;
    }

    // Public method to get the employee's name (public, accessible outside)
    public getName(): string {
        return this.name;
    }
}
