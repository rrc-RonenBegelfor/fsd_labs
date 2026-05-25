import { Outlet } from "react-router-dom";
import { Nav } from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

/**
 * This renders the general page structure -- the nav, footer, and the Outlet (page) within.
 * When we navigate to other children of this route (e.g. any, since it's rendered at the root "/")
 * it will render those route components in the <Outlet>.
 */
export function Layout() {
    return(
        <>
            <Header/>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}