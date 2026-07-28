import express, {Router, Request, Response, NextFunction} from "express";
import { validateRequest } from "../middleware/validate";
import { employeeSchema } from "../validations/employeeValidation";
import * as employeeController from "../controllers/employeeController";
import { getAuth } from "@clerk/express";

/**
 * Routes determine which endpoints are made available, which controller
 * method to request if that route gets a corresponding request,
 * and invoke validation middleware if needed.
 */

const router: Router = express.Router();

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    const auth = getAuth(req);
    if (!auth.userId) {
        return res.status(401).json({ error: `Unauthorized access.`});
    }
    next();
};

// define routes that Express will listen for requests to
// define method that will be invoked when route gets a request
router.get("/employees", employeeController.getAllEmployees);
router.get("/employees/:id", employeeController.getEmployeeById);

// methods including data invoked validateRequest middleware
// tested against employeeSchema
router.post("/employees", requireAuth, validateRequest(employeeSchema), 
    employeeController.createEmployee);

router.put("/employees/:id", requireAuth, validateRequest(employeeSchema),
    employeeController.updateEmployee);

router.delete("/employees/:id", requireAuth, employeeController.deleteEmployee);

export default router;