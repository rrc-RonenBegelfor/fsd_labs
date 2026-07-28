import type { GetToken } from "@clerk/react/types";
import * as LeadershipRepo from "../apis/leadershipRepo";
import type { LeadershipRoleData } from "../types/LeadershipRoleTypes";

export async function fetchLeaders(): Promise<LeadershipRoleData> {
    const leaders = await LeadershipRepo.fetchLeaders();
    return leaders;
}

export async function createLeader(firstName: string, lastName: string, role: string, getToken: GetToken) {
    const updatedLeaders = await LeadershipRepo.createLeader(firstName, lastName, role, getToken);
    return updatedLeaders;
}