import { useEffect, useState } from "react";
import * as LeadershipService from "../services/leadershipService";
import type { LeadershipRoleData } from "../types/LeadershipRoleTypes";

export function useLeaders() {
    const [leaders, setLeaders] = useState<LeadershipRoleData>({});
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadLeaders = async () => {
            try {
                await new Promise(r => setTimeout(r, 1000));

                const result = await LeadershipService.fetchLeaders();
                setLeaders(result)
            } catch (e) {
                setError((e as Error).message ?? "Failed to load leaders.");
            } finally {
                setLoading(false);
            }
        }
        loadLeaders();
    }, []);

    const addLeader = async (firstName: string, lastName: string, role: string) => {
        try {
            const updatedLeaders = await LeadershipService.createLeader(firstName, lastName, role);
            setLeaders(updatedLeaders);
        } catch (e) {
            setError((e as Error).message ?? "There was an error adding the leader");
        }
    }

    return { leaders, loading, error, addLeader };
}