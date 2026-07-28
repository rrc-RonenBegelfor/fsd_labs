import { useOrganization } from "@clerk/react";

export function useOrganizationRole() {
    const { membership } = useOrganization();

    const role = membership?.role;

    return {
        role,

        isAdmin: role === "org:admin",

        isManager: role === "org:manager",

        canCreate:
            role === "org:admin" ||
            role === "org:manager",

        canEdit:
            role === "org:admin",

        canDelete:
            role === "org:admin",
    };
}