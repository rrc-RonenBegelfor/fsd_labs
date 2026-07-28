import { NavLink } from "react-router";
import "./Nav.css"
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

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
            <div>
                <Show when="signed-out">
                    <SignInButton />
                    <SignUpButton />
                </Show>
                <Show when="signed-in">
                    <UserButton />  
                </Show>
            </div>
        </nav>
    );
}