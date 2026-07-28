import { useLeaders } from "../../hooks/useLeaders"
import LeadershipRoleList from "../LeadershipRoleList/LeadershipRoleList"
import LeadershipForm from "../LeadershipForm/LeadershipForm"
import { Show, SignInButton } from "@clerk/react";

export default function OrganizationPage() {

    const { leaders, loading, error, addLeader} = useLeaders();

    return <>
        {error ? (<div>{error}</div>
        ) : loading ? (<div className="blink">Loading leaders...</div>

        ) : (
            <>
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