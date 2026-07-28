export type Employee = {
    id: number;
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
    updateEmployee: (
        id: number,
        employee: {
            firstName: string;
            lastName: string;
            department: string;
        }
    ) => void;
    deleteEmployee: (id: number) => void;
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