export type Employee = {
    firstName: string;
    lastName?: string;
};

export type EmployeeDTO = {
    id: number;
    firstName: string;
    lastName: string;
    department: string;
};

export type EmployeeDirectoryData = Record<string, Employee[]>;

export type EmployeeDirectoryProps = {
    employees: EmployeeDirectoryData;
};