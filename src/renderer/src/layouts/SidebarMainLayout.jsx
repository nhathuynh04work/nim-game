import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import DecorationColumn from "../components/DecorationColumn";

function SidebarMainLayout() {
    return (
        <div
            className="bg-white text-gray-800 dark:bg-[#1c1e24] dark:text-gray-100 transition-colors duration-200 flex border-t border-gray-300 dark:border-zinc-700 overflow-hidden"
            style={{ height: "calc(100vh - 64px)" }}
        >
            <Sidebar />
            <div className="flex-1 bg-white dark:bg-[#1c1e24] flex overflow-hidden">
                <DecorationColumn />
                <Outlet />
                <DecorationColumn />
            </div>
        </div>
    );
}

export default SidebarMainLayout;
