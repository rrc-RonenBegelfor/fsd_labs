import * as LeadershipRepo from "../apis/leadershipRepo";
import type { LeadershipRoleData } from "../types/LeadershipRoleTypes";

export async function fetchLeaders(): Promise<LeadershipRoleData> {
    const leaders = await LeadershipRepo.fetchLeaders();
    return leaders;
}

// export async function createLeader(firstName: string, lastName: string, role: string) {
//     const updatedLeaders = await LeadershipRepo.createLeader(firstName, lastName, role);
//     return updatedLeaders;
// }