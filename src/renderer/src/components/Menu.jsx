function Menu({ children }) {
    return (
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md w-full max-w-xs flex flex-col gap-4">
            {children}
        </div>
    );
}

export default Menu;
