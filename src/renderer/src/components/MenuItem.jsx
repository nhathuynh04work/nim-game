import { NavLink } from "react-router";

function MenuItem({ to, onClick, children }) {
    const baseClass = `
        block w-full px-4 py-3 rounded-lg text-center font-medium border 
        border-gray-300 dark:border-zinc-600 shadow-sm cursor-pointer
        text-gray-800 dark:text-gray-100
        transition-colors duration-200
        hover:bg-blue-600 hover:text-white hover:border-blue-600
        dark:hover:bg-blue-500 dark:hover:border-blue-500
        focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300
    `;

    if (onClick) {
        return (
            <button onClick={onClick} className={baseClass}>
                {children}
            </button>
        );
    }

    return (
        <NavLink to={to} className={baseClass}>
            {children}
        </NavLink>
    );
}

export default MenuItem;
