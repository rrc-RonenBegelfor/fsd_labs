export type Role = {
    id?: number;
    firstName: string;
    lastName: string;
    role: string;
};

export type RoleDTO = {
    id: number;
    firstName: string;
    lastName: string;
    role: string;
};

export type LeadershipRoleData = Record<string, Role[]>;

export type LeadershipRoleProps = {
    leaders: LeadershipRoleData;
};