import { Request, Response, NextFunction} from "express";
import { Role } from "@prisma/client";
import * as leaderService from "../services/leaderService";
import { successResponse } from "../models/responseModel";

export const getAllLeaders = async(
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const Leaders = await leaderService.fetchAllLeaders();
        res.status(200).json(
            successResponse(Leaders, "Leaders retrieved successfully")
        );
    } catch (error) {
        next (error);
    }
}

export const getLeaderById = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const Leader: Role | null = 
            await leaderService.getLeaderById(Number.parseInt(req.params.id as string as string));
        if(Leader) {
            res.json(successResponse(Leader, "Leader retrieved succesfully"));
        } else{
            throw new Error("Leader not found");
        }
    } catch(error) {
        next(error);
    }
}

export const createLeader = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newLeader = await leaderService.createLeader(req.body);
        res.status(201)
            .json(successResponse(newLeader, "Leader created succesfully"));
    } catch(error) {
        next(error);
    }
};

export const updateLeader = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const updatedLeader = await leaderService.updateLeader(
            Number.parseInt(req.params.id as string),
            req.body
        );
        res.status(200)
            .json(successResponse(updatedLeader, "Leader updated succesfully"));
    } catch(error) {
        next(error);
    }
};

export const deleteLeader = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        await leaderService.deleteLeader(Number.parseInt(req.params.id as string));
        res.status(200)
            .json(successResponse(null, "Leader deleted succesfully"));
    } catch(error) {
        next(error);
    }
};