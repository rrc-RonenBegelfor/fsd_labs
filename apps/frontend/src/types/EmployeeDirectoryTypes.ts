export type Employee = {
    id?: number;
    firstName: string;
    lastName: string;
    department: string;
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

export type PaginatedEmployeeDirectory = {
    employees: EmployeeDirectoryData;
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
};