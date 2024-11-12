// Base class Employee
export class Employee {
    private name: string; // Encapsulation: private property
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    // Method to calculate salary, can be overridden
    public calculateSalary(): number {
        return this.baseSalary;
    }

    // Public method to get the employee's name
    public getName(): string {
        return this.name;
    }
}