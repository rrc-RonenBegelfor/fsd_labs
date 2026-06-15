import UserInput from "./UserInput/UserInput"
import type { EmployeeFormTypes } from "../../types/EmployeeFormTypes";
import "./EmployeeForm.css"
import UserSelection from "./UserSelection/UserSelection";
import type { ValidationResult } from "../../types/ValidationFormHookTypes";
import { useFormInput } from "../../hooks/useFormInput";

type RuleTypes = {
    firstName: number,
    lastName: number,
}

const validationRules: RuleTypes = {
    firstName: 2,
    lastName: 3,
}

const firstNameValidator = (value: string): ValidationResult => {
    if (value.trim().length === 0) {
        return { valid: false, message: "First name is required" };
    }
    if (value.trim().length < validationRules.firstName) {
        return {
            valid: false,
            message: "First name must be at least 2 letters long"
        }
    }
    return { valid: true };
}

const lastNameValidator = (value: string): ValidationResult => {
    if (value.trim().length === 0) {
        return { valid: false, message: "Last name is required" };
    }
    if (value.trim().length < validationRules.lastName) {
        return {
            valid: false,
            message: "Last name must be at least 3 letters long"
        }
    }
    return { valid: true };
}

const departmentValidator = (value: string): ValidationResult => {
    if (value.trim() == "") {
        return { valid: false, message: "Department is required" };
    }
    return { valid: true };
}

export default function EmployeeForm({addEmployee, employees} : EmployeeFormTypes) {
    const firstName = useFormInput<string>("", firstNameValidator, false);
    const lastName = useFormInput<string>("", lastNameValidator, false);
    const department = useFormInput<string>("", departmentValidator, true);

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        
        const firstValid = firstName.validate();
        const lastValid = lastName.validate();
        const depValid = department.validate();

        if (!firstValid.valid || !lastValid.valid || !depValid.valid) {
            return;
        }

        addEmployee(firstName.value, lastName.value, department.value);

        firstName.setValue("");
        lastName.setValue("");
        department.setValue("");

        firstName.clearMessage();
        lastName.clearMessage();
        department.clearMessage();
    }

    const submitValues = 
        firstNameValidator(firstName.value).valid && 
        lastNameValidator(lastName.value).valid && 
        departmentValidator(department.value).valid
    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="input-design">

                    <UserInput 
                    type="text" 
                    placeholder="First Name" 
                    name="firstName" 
                    value={firstName.value} 
                    onChange={firstName.onChange} 
                    onBlur={firstName.onBlur} 
                    error={firstName.message}/>
                    <UserInput 
                    type="text" 
                    placeholder="Last Name" 
                    name="lastName" 
                    value={lastName.value} 
                    onChange={lastName.onChange} 
                    onBlur={lastName.onBlur} 
                    error={lastName.message}/>
                    <UserSelection 
                    name="department" 
                    employees={employees} 
                    onChange={department.onChange} 
                    value={department.value}/>

                    {department.message && <div className="input-error">{department.message}</div>}
                </div>
                <button 
                type="submit" 
                disabled={
                !(submitValues)
                }
                >Submit</button>
            </form> 
        </>
    )
}