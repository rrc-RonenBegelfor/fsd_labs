import EmployeeDirectory from '../EmployeeDirectory/EmployeeDirectory'
import EmployeeForm from '../EmployeeForm/EmployeeForm'

import { useEmployees } from '../../hooks/useEmployees'
import { Show, SignInButton } from "@clerk/react";
import { useOrganizationRole } from '../../hooks/useOrganizationRole';

function EmployeePage() {

    const { employees, loading, error, addEmployee, updateEmployee, deleteEmployee, refreshEmployees, pagination } = useEmployees();

    const { canCreate } = useOrganizationRole();


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
                    <Show when="signed-in">
                        <button onClick={() => refreshEmployees()}>
                            Update Employees
                        </button>

                        <EmployeeDirectory employees={employees} updateEmployee={updateEmployee} deleteEmployee={deleteEmployee} />

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
                        {canCreate && (
                            <EmployeeForm
                                addEmployee={addEmployee}
                                employees={employees}
                            />
                        )}
                    </Show>


                    <Show when="signed-out">
                        <p>Sign in to view employees!</p>
                        <SignInButton />
                    </Show>
                </>
            )}
        </>
    )
}

export default EmployeePage;
