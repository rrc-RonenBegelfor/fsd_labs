import express, {Router, Request, Response, NextFunction} from "express";
import { validateRequest } from "../middleware/validate";
import { leaderSchema } from "../validations/leaderValidation";
import * as leaderController from "../controllers/leaderController";
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
router.get("/leaders", leaderController.getAllLeaders);
router.get("/leaders/:id", leaderController.getLeaderById);

// methods including data invoked validateRequest middleware
// tested against leaderSchema
router.post("/leaders", requireAuth, validateRequest(leaderSchema), 
    leaderController.createLeader);

router.put("/leaders/:id", requireAuth, validateRequest(leaderSchema),
    leaderController.updateLeader);

router.delete("/leaders/:id", requireAuth, leaderController.deleteLeader);

export default router;