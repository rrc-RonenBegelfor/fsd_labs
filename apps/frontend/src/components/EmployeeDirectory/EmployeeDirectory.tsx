import { useState } from "react";

import EmployeeSection from "./EmployeeSection/EmployeeSection";
import EmployeeList from "./EmployeeList/EmployeeList";
import EmployeeEditModal from "./EmployeeEditModal/EmployeeEditModal";
import type { EmployeeDirectoryProps, Employee } from "../../types/EmployeeDirectoryTypes";
import { useOrganizationRole } from "../../hooks/useOrganizationRole";

export default function EmployeeDirectory({
    employees,
    updateEmployee,
    deleteEmployee
}: EmployeeDirectoryProps) {

    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

    const { isAdmin } = useOrganizationRole();


    return (
        <>
            <section id="employeeInformation">
                {Object.entries(employees).map(([department, employeesList]) => (
                    <EmployeeSection 
                        key={department} 
                        department={department}
                    >
                        <ul>
                            {employeesList.map(employee => (
                                <EmployeeList
                                    key={employee.id}
                                    employee={employee}
                                    isAdmin={isAdmin}
                                    onEdit={() => setSelectedEmployee(employee)}
                                    onDelete={() => deleteEmployee(employee.id)}
                                />
                            ))}
                        </ul>
                    </EmployeeSection>
                ))}
            </section>

            {selectedEmployee && (
                <EmployeeEditModal
                    employee={selectedEmployee}
                    onClose={() => setSelectedEmployee(null)}
                    onSave={updateEmployee}
                />
            )}
        </>
    );
}