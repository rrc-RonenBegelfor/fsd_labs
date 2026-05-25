import EmployeeDirectory from '../../components/EmployeeDirectory/EmployeeDirectory'
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm'
import Footer from '../../components/common/Layout/Footer/Footer'
import Header from '../../components/common/Layout/Header/Header'
import { EmployeeData } from '../../assets/data'
import { useState } from 'react'
import type { EmployeeDirectoryData, Employee } from '../../types/EmployeeDirectoryTypes'
import { Nav } from '../common/Layout/Nav/Nav'

function EmployeePage() {

const [employees, setEmployees] = useState<EmployeeDirectoryData>(EmployeeData);

function addEmployee(firstName: string, lastName: string, department: string) {
    const newEmployee: Employee = {
        firstName,
        lastName,
    }

    setEmployees((prev) => ({
        ...prev,
        [department]: [
        ...(prev[department] || []),  
        newEmployee
        ]
    }))
}

return (
    <>
        <Header />
        <Nav />
        <EmployeeDirectory employees={employees}/>
        <EmployeeForm addEmployee={addEmployee} employees={employees}/>
        <Footer />
    </>
)
}

export default EmployeePage
