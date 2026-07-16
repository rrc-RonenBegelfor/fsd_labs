import UserInput from "../common/Layout/Inputs/UserInput/UserInput"
import "./LeadershipForm.css"
import type { ValidationResult } from "../../types/ValidationFormHookTypes";
import { useFormInput } from "../../hooks/useFormInput";
import type { LeaderFormTypes } from "../../types/FormTypes";
import { useState } from "react";
import type { LeadershipRoleData } from "../../types/LeadershipRoleTypes";

type RuleTypes = {
    firstName: number,
    lastName: number,
    role: number,
}

const validationRules: RuleTypes = {
    firstName: 3,
    lastName: 3,
    role: 2,
}

const firstNameValidator = (value: string): ValidationResult => {
    if (value.trim().length === 0) {
        return { valid: false, message: "First name is required" };
    }
    if (value.trim().length < validationRules.firstName) {
        return {
            valid: false,
            message: "First name must be at least 3 letters long"
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

const roleValidator = (value: string): ValidationResult => {
    if (value.trim().length === 0) {
        return { valid: false, message: "Role is required" };
    }
    if (value.trim().length < validationRules.role) {
        return {
            valid: false,
            message: "Role must be at least 2 letters long"
        }
    }
    return { valid: true };
}

export default function LeadershipForm({addLeader, leaders} : LeaderFormTypes) {
    const firstName = useFormInput<string>("", firstNameValidator, false);
    const lastName = useFormInput<string>("", lastNameValidator, false);
    const role = useFormInput<string>("", roleValidator, true);

    const [roleError, setRoleError] = useState<string>("");

    const roleExists = (role: string, leaders: LeadershipRoleData) => {
        const reformatedRole = role.trim().toLowerCase();
        return Object.values(leaders).some(l => 
            l.some(r => (r.role ?? "").trim().toLowerCase() === reformatedRole)
        );
    }

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        
        const firstValid = firstName.validate();
        const lastValid = lastName.validate();
        const roleValid = role.validate();

        if (roleValid.valid && roleExists(role.value, leaders)) {
        setRoleError("Role already exists, please declare a new one.");
        return;
        }

        if (!firstValid.valid || !lastValid.valid || !roleValid.valid) {
        return;
        }

        addLeader(firstName.value, lastName.value, role.value);

        firstName.setValue("");
        lastName.setValue("");
        role.setValue("");

        firstName.clearMessage();
        lastName.clearMessage();
        role.clearMessage();
    }

    const submitValues = 
        firstNameValidator(firstName.value).valid && 
        lastNameValidator(lastName.value).valid && 
        roleValidator(role.value).valid &&
        !roleExists(role.value, leaders);
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
                    <UserInput
                    type="text"
                    placeholder="Role"
                    name="role"
                    value={role.value}
                    onChange={(e) => {
                        role.onChange(e);
                        if (roleError) {
                            setRoleError("");
                        }
                    }}
                    onBlur={() => {
                        role.onBlur();
                        if (role.value && roleExists(role.value, leaders)) {
                            setRoleError("Role already exists, please declare a new one.")
                        }
                    }}
                    error={role.message || roleError}/>
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