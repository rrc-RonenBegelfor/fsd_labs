import type { GetToken } from "@clerk/react/types";
import type { EmployeeDirectoryData, EmployeeDTO, Employee, PaginatedEmployeeDirectory } from "../types/EmployeeDirectoryTypes";

type EmployeesResponseJSON = {
    message: string;
    data: {
        employees: EmployeeDTO[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
};
type EmployeeResponseJSON = {
    message: string;
    data: Employee;
};


const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const EMPLOYEE_ENDPOINT = "/employees"

export async function fetchEmployees(
    page: number = 1,
    limit: number = 10
): Promise<PaginatedEmployeeDirectory> {
    const employeeResponse = await fetch(`${BASE_URL}${EMPLOYEE_ENDPOINT}?page=${page}&limit=${limit}`);

    if (!employeeResponse.ok) {
        throw new Error("Failed to fetch employees");
    }

    const json: EmployeesResponseJSON = await employeeResponse.json();

    const employees = json.data.employees.reduce((directory, employee) => {
        if (!directory[employee.department]) {
            directory[employee.department] = [];
        }

        directory[employee.department].push({
            id: employee.id,
            firstName: employee.firstName,
            lastName: employee.lastName,
            department: employee.department
        });

        return directory;
    }, {} as EmployeeDirectoryData);

    return {
        employees,
        pagination: json.data.pagination
    };
}

// export async function fetchEmployeesByDeparmtent(department: string): Employee[] {
//     return employeeData[department] ?? [];
// }

export async function createEmployee(
    firstName: string,
    lastName: string,
    department: string,
    getToken: GetToken
): Promise<Employee> {

    const token = await getToken();

    const response = await fetch(`${BASE_URL}${EMPLOYEE_ENDPOINT}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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