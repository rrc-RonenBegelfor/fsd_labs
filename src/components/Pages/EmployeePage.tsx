import EmployeeDirectory from '../../components/EmployeeDirectory/EmployeeDirectory'
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm'

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
