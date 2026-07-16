import EmployeeDirectory from '../EmployeeDirectory/EmployeeDirectory'
import EmployeeForm from '../EmployeeForm/EmployeeForm'

import { useEmployees } from '../../hooks/useEmployees'

function EmployeePage() {

    const { employees, loading, error, addEmployee } = useEmployees();

    return (
        <>
            {error ? (
                <div>{error}</div>
            ) : loading ? (
                <div className="blink">Loading employees...</div>
            ) : (
                <>
                    <EmployeeDirectory employees={employees} />
                    <EmployeeForm
                        addEmployee={addEmployee}
                        employees={employees}
                    />
                </>
            )}
        </>
    )
}

export default EmployeePage
