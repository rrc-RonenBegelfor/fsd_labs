import type { LeadershipRoleData, RoleDTO } from "../types/LeadershipRoleTypes";

type LeadersResponseJSON = {
    message: string;
    data: RoleDTO[];
};

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const LEADERS_ENDPOINT = "/leaders";

export async function fetchLeaders(): Promise<LeadershipRoleData> {
    const leaderResponse = await fetch(`${BASE_URL}${LEADERS_ENDPOINT}`);

    if (!leaderResponse.ok) {
        throw new Error("Failed to fetch leaders");
    }

    const json: LeadersResponseJSON = await leaderResponse.json();

    return {
        leadershipRoles: json.data.map((leader) => ({
            firstName: leader.firstName,
            lastName: leader.lastName,
            role: leader.role
        }))
    };
}