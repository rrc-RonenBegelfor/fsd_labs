import { NavLink } from "react-router";
import "./Nav.css"

export function Nav() {
    return(
        <nav>
            <div>
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/employees" end>
                    Employees
                </NavLink>
                <NavLink to="/organization">
                    Organization
                </NavLink>
            </div>
        </nav>
    );
}