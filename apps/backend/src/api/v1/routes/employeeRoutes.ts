import express, {Router } from "express";
import { validateRequest } from "../middleware/validate";
import { employeeSchema } from "../validations/employeeValidation";
import * as employeeController from "../controllers/employeeController";

import { requireAuth, requireRole } from "../middleware/authMiddleware";

const router: Router = express.Router();


router.get("/employees", employeeController.getAllEmployees);
router.get("/employees/:id", employeeController.getEmployeeById);

router.post("/employees", requireAuth, requireRole("org:admin", "org:manager"), validateRequest(employeeSchema), 
    employeeController.createEmployee);

router.put("/employees/:id", requireAuth, requireRole("org:admin"), validateRequest(employeeSchema),
    employeeController.updateEmployee);

router.delete("/employees/:id", requireAuth, requireRole("org:admin"), employeeController.deleteEmployee);

export default router;