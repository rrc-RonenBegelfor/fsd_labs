import { Request, Response, NextFunction} from "express";
import { Employee } from "@prisma/client";
import * as employeeService from "../services/employeeService";
import { successResponse } from "../models/responseModel";

export const getAllEmployees = async(
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const Employees = await employeeService.fetchAllEmployees();
        res.status(200).json(
            successResponse(Employees, "Employees retrieved successfully")
        );
    } catch (error) {
        next (error);
    }
}

export const getEmployeeById = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const Employee: Employee | null = 
            await employeeService.getEmployeeById(Number.parseInt(req.params.id as string as string));
        if(Employee) {
            res.json(successResponse(Employee, "Employee retrieved succesfully"));
        } else{
            throw new Error("Employee not found");
        }
    } catch(error) {
        next(error);
    }
}

export const createEmployee = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newEmployee = await employeeService.createEmployee(req.body);
        res.status(201)
            .json(successResponse(newEmployee, "Employee created succesfully"));
    } catch(error) {
        next(error);
    }
};

export const updateEmployee = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const updatedEmployee = await employeeService.updateEmployee(
            Number.parseInt(req.params.id as string),
            req.body
        );
        res.status(200)
            .json(successResponse(updatedEmployee, "Employee updated succesfully"));
    } catch(error) {
        next(error);
    }
};

export const deleteEmployee = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        await employeeService.deleteEmployee(Number.parseInt(req.params.id as string));
        res.status(200)
            .json(successResponse(null, "Employee deleted succesfully"));
    } catch(error) {
        next(error);
    }
};