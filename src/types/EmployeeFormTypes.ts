import type { EmployeeDirectoryData } from "./EmployeeDirectoryTypes";

export type EmployeeFormTypes = {
    addEmployee: (
        firstName: string,
        lastName: string,
        department: string,
    ) => void;
    employees: EmployeeDirectoryData;
}