import { Employee } from "@prisma/client";
import prisma from "../../../../prisma/client";

type PaginatedEmployees = {
    employees: Employee[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
};

export const fetchAllEmployees = async(
    page: number,
    limit: number,
): Promise<PaginatedEmployees> => {
    const skip = (page - 1) * limit;

    const employees = await prisma.employee.findMany({
        skip,
        take: limit,
        orderBy: {
            id: "asc"
        }
    });

    const total = await prisma.employee.count();

    return {
        employees,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        }
    }
}

export const getEmployeeById = async(id: number): Promise<Employee | null> => {
    try {
        const employee = prisma.employee.findUnique({
            where: {
                id: id
            }
        });

        if(!employee) {
            return null;
        } else{
            return employee;
        }
    } catch(error) {
        throw new Error(`Failed to fetch employee with id ${id}`);
    }
}

export const createEmployee = async(employeeData: {
    firstName: string;
    lastName: string;
    department: string;
}): Promise<Employee> => {
    const newEmployee: Employee = await prisma.employee.create({
        data: {
            ...employeeData
        }
    });

    return newEmployee;
}

export const updateEmployee = async(
    id: number,
    employee: {title: string, definition: string, isFavourite: boolean}
): Promise<Employee> => {
    const updateEmployee = await prisma.employee.update({
        where: {
            id: id
        },
        data: {
            ...employee
        }
    });
    return updateEmployee;
}

export const deleteEmployee = async(id: number): Promise<void> => {
    await prisma.employee.delete({
        where: {
            id: id
        }
    });
}