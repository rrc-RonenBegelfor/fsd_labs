import { useState } from "react";
import type { Employee } from "../../../types/EmployeeDirectoryTypes";

type EmployeeEditModalProps = {
    employee: Employee;
    onClose: () => void;
    onSave: (
        id: number,
        data: {
            firstName: string;
            lastName: string;
            department: string;
        }
    ) => void;
};

export default function EmployeeEditModal({
    employee,
    onClose,
    onSave
}: EmployeeEditModalProps) {

    const [formData, setFormData] = useState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        department: employee.department
    });


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = () => {
        onSave(employee.id, formData);
        onClose();
    };


    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Edit Employee</h2>

                <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />

                <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />

                <input
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                />

                <div>
                    <button onClick={handleSubmit}>
                        Save
                    </button>

                    <button onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}