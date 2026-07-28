import * as EmployeeService from "../services/employeeService";
import { useEffect, useState } from "react";
import type { EmployeeDirectoryData } from "../types/EmployeeDirectoryTypes";
import { useAuth } from "@clerk/react"

export function useEmployees() {
    const [employees, setEmployees] = useState<EmployeeDirectoryData>({});
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 1
    })

    const { getToken } = useAuth();

    const refreshEmployees = async (page = 1) => {
        try {
            if (Object.keys(employees).length === 0) {
                setLoading(true);
            }

            setError(null);

            const result = await EmployeeService.fetchEmployees(page, 10);
            setEmployees(result.employees);
            setPagination(result.pagination);

        } catch (e) {
            setError(
                (e as Error).message ?? "There was an error loading employees"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        refreshEmployees();
    }, []);

    const addEmployee = async (
        firstName: string,
        lastName: string,
        department: string
    ) => {
        try {
            const newEmployee = await EmployeeService.createEmployee(
                firstName,
                lastName,
                department,
                getToken
            );

            setEmployees(prev => ({
                ...prev,
                [department]: [
                    ...(prev[department] ?? []),
                    newEmployee
                ]
            }));
        } catch (e) {
            setError((e as Error).message ?? "There was an error adding the employee");
        }
    };

    return { employees, loading, error, addEmployee, refreshEmployees, pagination };
}