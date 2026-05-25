import { LeadershipRoles } from "../../assets/data"
import Footer from "../common/Layout/Footer/Footer"
import Header from "../common/Layout/Header/Header"
import { Nav } from "../common/Layout/Nav/Nav"
import LeadershipRoleList from "../LeadershipRoleList/LeadershipRoleList"

export default function OrganizationPage() {
    return <>
        <Header />
        <Nav />
        <LeadershipRoleList leaders={LeadershipRoles}/>
        <Footer />
    </>
}