import { Request, Response, NextFunction} from "express";
import { getAuth } from "@clerk/express";

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    const auth = getAuth(req);
    if (!auth.userId) {
        return res.status(401).json({ error: `Unauthorized access.`});
    }
    next();
};

export const requireRole = (...roles: string[]) => {
    return (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const { orgRole } = getAuth(req);

        if (!roles.includes(orgRole ?? "")) {
            return res.status(403).json({
                message: "Insufficient permissions"
            });
        }

        next();
    };
};