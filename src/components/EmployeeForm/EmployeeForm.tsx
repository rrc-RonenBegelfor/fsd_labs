import { useState } from "react"
import UserInput from "./UserInput/UserInput"
import type { EmployeeFormTypes } from "../../types/EmployeeFormTypes";
import "./EmployeeForm.css"
import UserSelection from "./UserSelection/UserSelection";

type RuleTypes = {
    firstName: number,
    lastName: number,
}

export default function EmployeeForm({addEmployee, employees} : EmployeeFormTypes) {
    const [inputs, setInputs] = useState<{
        firstName: string,
        lastName: string,
        department: string,
    }>({
        firstName: "",
        lastName: "",
        department: "",
    });

    const [touched, setTouched] = useState({
        firstName: false,
        lastName: false,
        department: false,
    })

    const validationRules: RuleTypes = {
        firstName: 2,
        lastName: 3,
    }
    
    function validForm(rules: RuleTypes) {

        const validFirstName =  inputs.firstName.length > rules.firstName;
        const validLastName = inputs.lastName.length > rules.lastName;
        const validDepartment = inputs.department != "";
    
        const isFormValid =
            validFirstName &&
            validLastName &&
            validDepartment;

        return isFormValid;
    }


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setInputs((prev) => ({
            ...prev, [name]: value,
        }));
    }

    function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const { name, value } = e.target;

        setInputs((prev) => ({
            ...prev, [name]: value,
        }));
    }

    function inputTouched(e: React.FocusEvent<HTMLInputElement>) {
        const { name } = e.target;

        setTouched((prev) => ({
            ...prev, [name] : true
        }))
    }

    // It says FormEvent is deprecated but I am unsure what to use for the type anyways, it it does not place a scary red underline, it does not place a scary red underline :D
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        
        addEmployee(
            inputs.firstName,
            inputs.lastName,
            inputs.department,
        );

        setInputs(
            {
                firstName: "",
                lastName: "",
                department: "",
            }
        )

        setTouched(
            {
                firstName: false,
                lastName: false,
                department: false,
            }
        )
        console.log(inputs);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="input-design">
                <UserInput type="text" error="First name must be at least 2 letters long" placeholder="First Name" name="firstName" value={inputs.firstName} onChange={handleChange} minLength={validationRules.firstName} touched={touched.firstName} onBlur={inputTouched}/>
                <UserInput type="text" error="Last name must be at least 3 letters long" placeholder="Last Name" name="lastName" value={inputs.lastName} onChange={handleChange} minLength={validationRules.lastName} touched={touched.lastName} onBlur={inputTouched}/>
                <UserSelection name="department" employees={employees} onChange={handleSelectChange} value={inputs.department}/>
                <button type="submit" disabled={!validForm(validationRules)}>Submit</button>
            </form> 
        </>
    )
}