import type { EmployeeDirectoryData, EmployeeDTO } from "../types/EmployeeDirectoryTypes";

type EmployeesResponseJSON = {message: string, data: EmployeeDTO[]};


const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const EMPLOYEE_ENDPOINT = "/employees"

export async function fetchEmployees(): Promise<EmployeeDirectoryData> {
    const employeeResponse = await fetch(`${BASE_URL}${EMPLOYEE_ENDPOINT}`);

    if (!employeeResponse.ok) {
        throw new Error("Failed to fetch employees");
    }

    const json: EmployeesResponseJSON = await employeeResponse.json();

    return json.data.reduce((directory, employee) => {
        if (!directory[employee.department]) {
            directory[employee.department] = [];
        }

        directory[employee.department].push({
            firstName: employee.firstName,
            lastName: employee.lastName
        });

        return directory;
    }, {} as EmployeeDirectoryData);
}

// export async function fetchEmployeesByDeparmtent(department: string): Employee[] {
//     return employeeData[department] ?? [];
// }

// export async function createEmployee(firstName: string, lastName: string, department: string): EmployeeDirectoryData {
//     const newEmployee: Employee = { firstName, lastName };

//     if (!employeeData[department]) {
//         employeeData[department] = [];
//     }

//     employeeData[department].push(newEmployee);

//     return {
//         ...employeeData,
//         [department]: [...employeeData[department]],
//     };
// }