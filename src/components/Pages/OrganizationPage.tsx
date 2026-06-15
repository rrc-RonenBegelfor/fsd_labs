import { useLeaders } from "../../hooks/useLeaders"
import LeadershipRoleList from "../LeadershipRoleList/LeadershipRoleList"
import LeadershipForm from "../LeadershipForm/LeadershipForm"

export default function OrganizationPage() {

    const { leaders, loading, error, addLeader} = useLeaders();

    return <>
        {error ? (<div>{error}</div>
        ) : loading ? (<div className="blink">Loading leaders...</div>

        ) : (
            <>
                <LeadershipRoleList leaders={leaders}/>
                <LeadershipForm addLeader={addLeader} leaders={leaders}/>
            </>
        )}
    </>
}