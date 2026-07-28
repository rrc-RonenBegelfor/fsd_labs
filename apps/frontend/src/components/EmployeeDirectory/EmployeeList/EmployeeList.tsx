interface Employee {
    id: number;
    firstName: string;
    lastName?: string;
    department?: string;
}

type EmployeeListTypes = {
    employee: Employee;
    isAdmin: boolean;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

export default function EmployeeList( {employee, isAdmin, onDelete, onEdit} : EmployeeListTypes) {
    return <>
        <li>{employee.firstName} {employee.lastName}

            {isAdmin && (
                <>
                    <button onClick={() => onEdit(employee.id)}>
                        Edit
                    </button>

                    <button onClick={() => onDelete(employee.id)}>
                        Delete
                    </button>
                </>
            )}
        </li>
    </>
}