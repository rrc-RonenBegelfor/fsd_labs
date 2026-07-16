import Joi, { ObjectSchema } from "joi";

export const employeeSchema: ObjectSchema = Joi.object({
    firstName: Joi.string().required().messages({
        "any.required": "First name is required",
        "string.empty": "First name cannot be empty"
    }),
    lastName: Joi.string().required().messages({
        "any.required": "Last name is required",
        "string.empty": "Last name cannot be empty"
    }),
    department: Joi.string().required().messages({
        "any.required": "Department is required",
        "string.empty": "Department cannot be empty"
    })
});