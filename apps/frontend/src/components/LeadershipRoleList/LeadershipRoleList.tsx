import "./LeadershipRoleList.css"
import type { LeadershipRoleProps } from "../../types/LeadershipRoleTypes";

export default function LeadershipRoleList ({ leaders }: LeadershipRoleProps) {
    return <>
        <section className="role-data-holder">
            <table>
                <thead>
                    <tr key="table-elements">
                        <th>
                            <h2>Employee Name</h2>
                        </th>
                        <th>
                            <h2>Role</h2>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(leaders).map(([, attributes]) => (
                        attributes.map((attribute) => (
                            <tr key={attribute.id}>
                                <td>{attribute.firstName} {attribute.lastName}</td>
                                <td>{attribute.role}</td>
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        </section>
    </>   
}