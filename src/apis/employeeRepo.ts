import type { Employee, EmployeeDirectoryData } from "../types/EmployeeDirectoryTypes";
import { EmployeeData as employeeData} from "../apis/data";

export function fetchEmployees(): EmployeeDirectoryData {
    return employeeData;
}

export function fetchEmployeesByDeparmtent(department: string): Employee[] {
    return employeeData[department] ?? [];
}

export function createEmployee(firstName: string, lastName: string, department: string): EmployeeDirectoryData {
    const newEmployee: Employee = { firstName, lastName };

    if (!employeeData[department]) {
        employeeData[department] = [];
    }

    employeeData[department].push(newEmployee);

    return {
        ...employeeData,
        [department]: [...employeeData[department]],
    };
}