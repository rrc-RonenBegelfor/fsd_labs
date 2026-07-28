import { useLeaders } from "../../hooks/useLeaders"
import LeadershipRoleList from "../LeadershipRoleList/LeadershipRoleList"
import LeadershipForm from "../LeadershipForm/LeadershipForm"

import { Show, SignInButton } from "@clerk/react";
import { useOrganizationRole } from "../../hooks/useOrganizationRole";

export default function OrganizationPage() {

    const { leaders, loading, error, addLeader, refreshLeaders } = useLeaders();

    const { canCreate } = useOrganizationRole();

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
                <Show when="signed-in">
                    <button onClick={refreshLeaders}>Update Leaders</button>
                    <LeadershipRoleList leaders={leaders}/>

                    {canCreate && (
                        <LeadershipForm addLeader={addLeader} leaders={leaders}>

                        </LeadershipForm>
                    )}
                </Show>

                <Show when="signed-out">
                    <p>Sign in to view leaders!</p>
                    <SignInButton />
                </Show>
            </>
        )}
    </>
}