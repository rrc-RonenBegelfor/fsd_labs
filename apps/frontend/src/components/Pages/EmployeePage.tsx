import EmployeeDirectory from '../EmployeeDirectory/EmployeeDirectory'
import EmployeeForm from '../EmployeeForm/EmployeeForm'

import { useEmployees } from '../../hooks/useEmployees'
import { Show, SignInButton } from "@clerk/react";

function EmployeePage() {

    const { employees, loading, refreshing, error, addEmployee, refreshEmployees, pagination } = useEmployees();

    return (
        <>
            {error ? (
                <>
                    <div>{error}</div>
                    <button onClick={() => refreshEmployees()}>Try to fetch again</button>
                </>
            ) : loading ? (
                <div className="blink">Loading employees...</div>
            ) : (
                <>
                    <button onClick={() => refreshEmployees()}>
                        Update Employees
                    </button>

                    {refreshing && (
                        <div className="blink">
                            Updating employees...
                        </div>
                    )}

                    <EmployeeDirectory employees={employees} />

                    <div>
                        <button
                            disabled={pagination.page === 1}
                            onClick={() => refreshEmployees(pagination.page - 1)}
                        >
                            Previous
                        </button>

                        <span>
                            Page {pagination.page} / {pagination.totalPages}
                        </span>

                        <button
                            disabled={pagination.page === pagination.totalPages}
                            onClick={() => refreshEmployees(pagination.page + 1)}
                        >
                            Next
                        </button>
                    </div>

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

export default EmployeePage;
