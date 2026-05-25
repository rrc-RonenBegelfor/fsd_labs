export type Role = {
    firstName: string,
    lastName: string,
    role: string
}


export type LeadershipRoleData = Record<string, Role[]>;

export type LeadershipRoleProps = {
    leaders: LeadershipRoleData;
};