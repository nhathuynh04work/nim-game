import { NavLink } from "react-router";

function SidebarNavItem({ to, icon, children, end }) {
    return (
        <NavLink
            to={to}
            end={end}
            className={({ isActive }) =>
                `flex gap-2 items-center dark:text-[#b1b3b7] ${
                    isActive ? "text-gray-900 font-semibold dark:text-[#fdfdfb]" : ""
                }`
            }
        >
            {icon}
            {children}
        </NavLink>
    );
}

export default SidebarNavItem;
