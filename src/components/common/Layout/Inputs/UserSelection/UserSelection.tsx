import type { EmployeeDirectoryData } from "../../../../../types/EmployeeDirectoryTypes"

type UserSelectionTypes = {
    name: string;
    employees: EmployeeDirectoryData
    value: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>
}

export default function UserSelection({name, employees, value, onChange} : UserSelectionTypes) {
    return <>
        <label htmlFor={name}>Departments</label>
        <select name={name} onChange={onChange} value={value} id={name}>
            <option value="" disabled>
                Select a department
            </option>
            {Object.entries(employees).map(([department, ]) => (
                <option key={department} value={department}>
                    {department}
                </option>
            ))}
        </select>
    </>
}