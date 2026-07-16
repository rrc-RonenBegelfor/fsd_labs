import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
import { leaderSchema } from "../validations/leaderValidation";
import * as leaderController from "../controllers/leaderController";

/**
 * Routes determine which endpoints are made available, which controller
 * method to request if that route gets a corresponding request,
 * and invoke validation middleware if needed.
 */

const router: Router = express.Router();

// define routes that Express will listen for requests to
// define method that will be invoked when route gets a request
router.get("/leaders", leaderController.getAllLeaders);
router.get("/leaders/:id", leaderController.getLeaderById);

// methods including data invoked validateRequest middleware
// tested against leaderSchema
router.post("/leaders", validateRequest(leaderSchema), 
    leaderController.createLeader);

router.put("/leaders/:id", validateRequest(leaderSchema),
    leaderController.updateLeader);

router.delete("/leaders/:id", leaderController.deleteLeader);

export default router;