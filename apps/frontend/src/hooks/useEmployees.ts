import * as EmployeeService from "../services/employeeService";
import { useEffect, useState } from "react";
import type { EmployeeDirectoryData } from "../types/EmployeeDirectoryTypes";

export function useEmployees() {
    const [employees, setEmployees] = useState<EmployeeDirectoryData>({});
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadEmployees = async () => {
            try {
                await new Promise(r => setTimeout(r, 1000));

                const result = await EmployeeService.fetchEmployees();
                setEmployees(result);
            } catch (e) {
                setError((e as Error).message ?? "There was an error loading the employees");
            } finally {
                setLoading(false);
            }
        };

        loadEmployees();
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
                department
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

    return { employees, loading, error, addEmployee };
}