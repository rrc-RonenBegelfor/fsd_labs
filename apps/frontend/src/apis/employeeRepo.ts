import type { EmployeeDirectoryData, EmployeeDTO, Employee } from "../types/EmployeeDirectoryTypes";

type EmployeesResponseJSON = {message: string, data: EmployeeDTO[]};
type EmployeeResponseJSON = {
    message: string;
    data: Employee;
};


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
            lastName: employee.lastName,
            department: ""
        });

        return directory;
    }, {} as EmployeeDirectoryData);
}

// export async function fetchEmployeesByDeparmtent(department: string): Employee[] {
//     return employeeData[department] ?? [];
// }

export async function createEmployee(
    firstName: string,
    lastName: string,
    department: string
): Promise<Employee> {

    const response = await fetch(`${BASE_URL}${EMPLOYEE_ENDPOINT}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstName,
            lastName,
            department
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to create employee");
    }

    const json: EmployeeResponseJSON = await response.json();

    return json.data;
}