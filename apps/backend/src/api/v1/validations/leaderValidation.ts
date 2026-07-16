import Joi, { ObjectSchema } from "joi";

// define the correct shape of a term object received in JSON
// Require a title and definition string at minimum
export const leaderSchema: ObjectSchema = Joi.object({
    firstName: Joi.string().required().messages({
        "any.required": "First name is required",
        "string.empty": "First name cannot be empty"
    }),
    lastName: Joi.string().required().messages({
        "any.required": "Last name is required",
        "string.empty": "Last name cannot be empty"
    }),
    id: Joi.string().optional(),
    role: Joi.string().optional()
});