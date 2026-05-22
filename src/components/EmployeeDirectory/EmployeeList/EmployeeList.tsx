interface Employee {
    firstName: string;
    lastName?: string;
}

type EmployeeListTypes = {
    employee: Employee;
}

export default function EmployeeList( {employee} : EmployeeListTypes) {
    return <>
        <li>{employee.firstName} {employee.lastName}</li>
    </>
}