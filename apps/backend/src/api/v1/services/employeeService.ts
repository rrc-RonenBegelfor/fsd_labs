// Use the employee type defined in prisma/schema.prisma
import { Employee } from "@prisma/client";
// initialize a prisma client if not already and use in queries here
import prisma from "../../../../prisma/client";

/**
 * Services access data as necessary from the Prisma client. They invoke
 * methods on the ORM, which will send queries to the database and respond
 * with data needed.
 * 
 * More general info on Prisma: https://www.prisma.io/docs/orm/overview/prisma-in-your-stack/rest
 */
export const fetchAllEmployees = async(): Promise<Employee[]> => {
    // get all records in the employee table
    return prisma.employee.findMany();
}

export const getEmployeeById = async(id: number): Promise<Employee | null> => {
    try {
        // get first record that match the "where" object key/value pairs
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
    title: string,
    definition: string
}): Promise<Employee> => {
    // create a new employee with employeeData as its column values, except for isFavourite as false
    const newEmployee: Employee = await prisma.employee.create({
        data: {
            isFavourite: false,
            ...employeeData
        }
    });

    return newEmployee;
}

export const updateEmployee = async(
    id: number,
    employee: {title: string, definition: string, isFavourite: boolean}
): Promise<Employee> => {
    // find a employee where the id matches the id parameter, and update with the employee argument for values
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
    // delete the employee that matches the where key/value pairs
    await prisma.employee.delete({
        where: {
            id: id
        }
    });
}