import { Outlet } from "react-router";
import TopBar from "../components/TopBar";

function TopMainLayout() {
    return (
        <>
            <TopBar />
            <Outlet />
        </>
    );
}

export default TopMainLayout;
