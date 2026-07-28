import express, {Router } from "express";
import { validateRequest } from "../middleware/validate";
import { leaderSchema } from "../validations/leaderValidation";
import * as leaderController from "../controllers/leaderController";

import { requireAuth, requireRole } from "../middleware/authMiddleware";

const router: Router = express.Router();

router.get("/leaders", leaderController.getAllLeaders);
router.get("/leaders/:id", leaderController.getLeaderById);

router.post("/leaders", requireAuth, requireRole("org:admin", "org:manager"), validateRequest(leaderSchema), 
    leaderController.createLeader);

router.put("/leaders/:id", requireAuth, requireRole("org:admin"), validateRequest(leaderSchema),
    leaderController.updateLeader);

router.delete("/leaders/:id", requireAuth, requireRole("org:admin"), leaderController.deleteLeader);

export default router;