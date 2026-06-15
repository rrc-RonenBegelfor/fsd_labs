import type { LeadershipRoleData, Role } from "../types/LeadershipRoleTypes";
import  { LeadershipRoles as LeadershipData} from "../apis/data";

export function fetchLeaders(): LeadershipRoleData {
    return LeadershipData;
}

export function createLeader(firstName: string, lastName: string, role: string): LeadershipRoleData {
    const newLeader: Role = { firstName, lastName, role };

    if (!LeadershipData["leadershipRoles"]) {
        LeadershipData["leadershipRoles"] = [];
    }

    LeadershipData["leadershipRoles"].push(newLeader);

    return {
        ...LeadershipData,
        leadershipRoles: [...LeadershipData["leadershipRoles"]],
    };
}