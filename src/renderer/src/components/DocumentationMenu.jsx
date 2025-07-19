import { NavLink } from "react-router";

const menu = [
    {
        title: "History",
        to: "/documentation/history"
    },
    {
        title: "Rules",
        to: "/documentation/rules"
    },
    {
        title: "Mathematics",
        to: "/documentation/mathematics"
    },
    {
        title: "Demo",
        to: "/documentation/demo"
    },
    {
        title: "Credits",
        to: "/documentation/credits"
    },
    {
        title: "Author",
        to: "/documentation/author"
    }
];

function DocumentationMenu() {
    return (
        <div className="ml-4 flex flex-col border-l border-[#e8e8e8] dark:border-[#2a2f3b] gap-3.5 font-mono">
            {menu.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.to}
                    end={item.to === ""}
                    className={({ isActive }) =>
                        `text-[12px] transition-colors duration-200 px-3 border-l -ml-px dark:text-[#b1b3b7] ${isActive ? " text-gray-900 font-semibold dark:text-[#fdfdfb] border-[#34353b] dark:border-[#feffff]" : "border-transparent"}`
                    }
                >
                    {item.title}
                </NavLink>
            ))}
        </div>
    );
}

export default DocumentationMenu;
