import * as LeadershipRepo from "../apis/leadershipRepo";
import type { LeadershipRoleData } from "../types/LeadershipRoleTypes";

export async function fetchLeaders(): Promise<LeadershipRoleData> {
    const leaders = await LeadershipRepo.fetchLeaders();
    return leaders;
}