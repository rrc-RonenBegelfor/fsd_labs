import { useLeaders } from "../../hooks/useLeaders"
import LeadershipRoleList from "../LeadershipRoleList/LeadershipRoleList"
import LeadershipForm from "../LeadershipForm/LeadershipForm"
import { Show, SignInButton } from "@clerk/react";

export default function OrganizationPage() {

    const { leaders, loading, error, addLeader, refreshLeaders } = useLeaders();

    return <>
        {error ? (
            <>
                <div>{error}</div>
                <button onClick={refreshLeaders}>Try to fetch again</button>
            </>
        ) : loading ? (
            <div className="blink">Loading leaders...</div>
        ) : (
            <>
                <button onClick={refreshLeaders}>Update Leaders</button>
                <LeadershipRoleList leaders={leaders}/>
                <Show when="signed-in">
                    <LeadershipForm addLeader={addLeader} leaders={leaders}/>
                </Show>

                <Show when="signed-out">
                    <p>Sign in to add leaders</p>
                    <SignInButton />
                </Show>
            </>
        )}
    </>
}