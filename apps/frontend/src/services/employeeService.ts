import type { GetToken } from "@clerk/react/types";
import * as EmployeeRepo from "../apis/employeeRepo";
// import type { Employee } from "../types/EmployeeDirectoryTypes";

export async function fetchEmployees() {
    const employees = await EmployeeRepo.fetchEmployees();
    return employees;
}

// export async function fetchEmployeesByDeparmtent(department: string) {
//     const employeesByDepartment: Employee[] = await EmployeeRepo.fetchEmployeesByDeparmtent(department);
//     return employeesByDepartment;
// }

export async function createEmployee(firstName: string, lastName: string, department: string, getToken: GetToken) {
    const updatedEmployees = await EmployeeRepo.createEmployee(firstName, lastName, department, getToken);
    return updatedEmployees;
}