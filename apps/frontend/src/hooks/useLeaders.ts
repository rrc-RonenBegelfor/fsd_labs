import { useEffect, useState } from "react";
import * as LeadershipService from "../services/leadershipService";
import type { LeadershipRoleData } from "../types/LeadershipRoleTypes";
import { useAuth } from "@clerk/react";

export function useLeaders() {
    const [leaders, setLeaders] = useState<LeadershipRoleData>({});
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true);
    
    const { getToken } = useAuth();

    const refreshLeaders = async () => {
            try {
                setLoading(true);
                setError(null);
    
                const result = await LeadershipService.fetchLeaders();
                setLeaders(result);
    
            } catch (e) {
                setError(
                    (e as Error).message ?? "There was an error loading employees"
                );
            } finally {
                setLoading(false);
            }
        };
    
        useEffect(() => {
            refreshLeaders();
        }, []);

    const addLeader = async (
            firstName: string,
            lastName: string,
            role: string
        ) => {
            try {
                const newLeader = await LeadershipService.createLeader(
                    firstName,
                    lastName,
                    role,
                    getToken
                );
    
                setLeaders(prev => ({
                    ...prev,
                    [role]: [
                        ...(prev[role] ?? []),
                        newLeader
                    ]
                }));
            } catch (e) {
                setError((e as Error).message ?? "There was an error adding the leader");
            }
        };

    return { leaders, loading, error, addLeader, refreshLeaders };
}