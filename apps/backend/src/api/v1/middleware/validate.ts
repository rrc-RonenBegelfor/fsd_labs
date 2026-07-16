import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

// Local type fallbacks to avoid dependency on external types file
type RequestData = Record<string, any>;
type MiddlewareFunction = (req: Request, res: Response, next: NextFunction) => void;

// validate method provided by Joi package=
export const validate = <T>(schema: ObjectSchema<T>, data:T): void => {
    const { error } = schema.validate(data, {abortEarly: false});

    if(error) {
        throw new Error(
            `Validation error: ${
                error.details.map(x => x.message)
                .join(", ")
            }`
        );
    }
};

// run validate method against received data
// provided as middleware function
export const validateRequest = (schema: ObjectSchema): MiddlewareFunction => {
    return(req: Request, res: Response, next: NextFunction) => {
        try {
            const data: RequestData = {
                ...req.body,
                ...req.params,
                ...req.query
            };
            validate(schema, data);
            // invoke next middleware if no error is caught
            next();
        } catch(error) {
            res.status(400).json({error: (error as Error).message});
        } 
    };
};