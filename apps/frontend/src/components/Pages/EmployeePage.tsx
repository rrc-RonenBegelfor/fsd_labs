import EmployeeDirectory from '../EmployeeDirectory/EmployeeDirectory'
import EmployeeForm from '../EmployeeForm/EmployeeForm'

import { useEmployees } from '../../hooks/useEmployees'
import { Show, SignInButton } from "@clerk/react";

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
                    <Show when="signed-in">
                        <EmployeeForm
                            addEmployee={addEmployee}
                            employees={employees}
                        />
                    </Show>
                    <Show when="signed-out">
                        <p>Sign in to add employees</p>
                        <SignInButton />
                    </Show>
                </>
            )}
        </>
    )
}

export default EmployeePage
