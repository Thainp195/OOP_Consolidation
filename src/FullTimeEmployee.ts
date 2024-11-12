import { Employee } from './Employee';

// Subclass FullTimeEmployee inherits from Employee
export class FullTimeEmployee extends Employee {
    private bonus: number; // Private property for the bonus

    constructor(name: string, baseSalary: number, bonus: number) {
        super(name, baseSalary); // Call the parent class constructor
        this.bonus = bonus;
    }

    // Override the salary calculation method from the parent class
    public calculateSalary(): number {
        return super.calculateSalary() + this.bonus; // Calculate salary including bonus
    }
}