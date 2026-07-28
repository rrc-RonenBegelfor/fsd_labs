import type { LeadershipRoleData, RoleDTO, Role } from "../types/LeadershipRoleTypes";
import type { GetToken } from "@clerk/react/types";

type LeadersResponseJSON = {
    message: string;
    data: RoleDTO[];
};

type LeaderResponseJSON = {
    message: string;
    data: Role;
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
            id: leader.id,
            firstName: leader.firstName,
            lastName: leader.lastName,
            role: leader.role,
        }))
    };
}

export async function createLeader(
    firstName: string,
    lastName: string,
    role: string,
    getToken: GetToken
): Promise<Role> {

    const token = await getToken();

    const response = await fetch(`${BASE_URL}${LEADERS_ENDPOINT}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            firstName,
            lastName,
            role
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to create leader");
    }

    const json: LeaderResponseJSON = await response.json();

    return json.data;
}