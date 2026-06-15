import { useLeaders } from "../../hooks/useLeaders"
import LeadershipRoleList from "../LeadershipRoleList/LeadershipRoleList"

export default function OrganizationPage() {

    const { leaders, loading, error} = useLeaders();

    return <>
        {error ? (<div>{error}</div>) :loading ? (<div className="blink">Loading leaders...</div>) : (<LeadershipRoleList leaders={leaders}/>)}
    </>
}