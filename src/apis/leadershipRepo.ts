import type { LeadershipRoleData } from "../types/LeadershipRoleTypes";
import  { LeadershipRoles as LeadershipData} from "../apis/data";

export function fetchLeaders(): LeadershipRoleData {
    return LeadershipData;
}