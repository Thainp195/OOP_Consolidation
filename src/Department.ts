import { Employee } from './Employee'; // Import the Employee class

// Department class to manage employees
export class Department {
    private employees: Employee[] = []; // Private property to store the list of employees

    // Method to add an employee to the list
    public addEmployee(employee: Employee) {
        this.employees.push(employee); // Add the employee to the employees array
    }

    // Method to display information about all employees
    public showEmployees() {
        // Iterate through the list of employees
        this.employees.forEach(emp => {
            // Log the employee's name and calculated salary using public methods
            console.log(`Name: ${emp.getName()}, Salary: ${emp.calculateSalary()}`);
        });
    }
}
