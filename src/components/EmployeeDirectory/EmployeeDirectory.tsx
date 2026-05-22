import EmployeeSection from "./EmployeeSection/EmployeeSection";
import { EmployeeData } from "../../assets/data";
import EmployeeList from "./EmployeeList/EmployeeList";

export default function EmployeeDirectory() {
    return <>
        <section id="employeeInformation" >        
            {Object.entries(EmployeeData).map(([department, employees]) => (
                <EmployeeSection key={department} department={department}>
                    <ul>
                        {employees.map(employee => (
                            <EmployeeList key={employee.firstName + "_" + employee.lastName} employee={employee}/>
                        ))}
                    </ul>
                </EmployeeSection>
            ))}
        </section>
    </>
}