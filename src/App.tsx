import './App.css'
import EmployeeDirectory from './components/EmployeeDirectory/EmployeeDirectory'
import EmployeeForm from './components/EmployeeForm/EmployeeForm'
import Footer from './components/Footer'
import Header from './components/Header'
import { EmployeeData } from './assets/data'
import { useState } from 'react'
import type { EmployeeDirectoryData, Employee } from './types/EmployeeDirectoryTypes'

function App() {

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
    <EmployeeDirectory employees={employees}/>
    <EmployeeForm addEmployee={addEmployee} employees={employees}/>
    <Footer />
    </>
  )
}

export default App
