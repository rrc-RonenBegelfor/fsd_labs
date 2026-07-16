import EmployeeSection from "./EmployeeSection/EmployeeSection";
import EmployeeList from "./EmployeeList/EmployeeList";
import type { EmployeeDirectoryProps } from "../../types/EmployeeDirectoryTypes";

export default function EmployeeDirectory({employees} : EmployeeDirectoryProps) {
    return <>
        <section id="employeeInformation" >        
            {Object.entries(employees).map(([department, employeesList]) => (
                <EmployeeSection key={department} department={department}>
                    <ul>
                        {employeesList.map(employee => (
                            <EmployeeList key={employee.firstName + "_" + employee.lastName} employee={employee}/>
                        ))}
                    </ul>
                </EmployeeSection>
            ))}
        </section>
    </>
}