import type { EmployeeDirectoryData } from "./EmployeeDirectoryTypes";
import type { LeadershipRoleData } from "./LeadershipRoleTypes";

export type EmployeeFormTypes = {
    addEmployee: (
        firstName: string,
        lastName: string,
        department: string,
    ) => void;
    employees: EmployeeDirectoryData;
}

export type LeaderFormTypes = {
    addLeader: (
        firstName: string,
        lastName: string,
        role: string,
    ) => void;
    leaders: LeadershipRoleData;
}