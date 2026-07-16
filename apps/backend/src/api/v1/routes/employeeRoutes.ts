import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
import { employeeSchema } from "../validations/employeeValidation";
import * as employeeController from "../controllers/employeeController";

/**
 * Routes determine which endpoints are made available, which controller
 * method to request if that route gets a corresponding request,
 * and invoke validation middleware if needed.
 */

const router: Router = express.Router();

// define routes that Express will listen for requests to
// define method that will be invoked when route gets a request
router.get("/employees", employeeController.getAllEmployees);
router.get("/employees/:id", employeeController.getEmployeeById);

// methods including data invoked validateRequest middleware
// tested against employeeSchema
router.post("/employees", validateRequest(employeeSchema), 
    employeeController.createEmployee);

router.put("/employees/:id", validateRequest(employeeSchema),
    employeeController.updateEmployee);

router.delete("/employees/:id", employeeController.deleteEmployee);

export default router;