function ModeToggle({ onClick, currentMode, disabled }) {
    const options = ["vsComputer", "vsPlayer"];
    const activeIndex = options.indexOf(currentMode);

    return (
        <div
            className={`relative w-full flex overflow-hidden rounded-sm border 
                bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-600
                text-sm font-medium
                ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
        >
            <div
                className="absolute top-0 left-0 w-1/2 h-full bg-zinc-200 dark:bg-zinc-600 transition-transform duration-300 rounded-sm"
                style={{ transform: `translateX(${activeIndex * 100}%)` }}
            />

            {options.map((mode) => (
                <div
                    key={mode}
                    onClick={disabled ? null : () => onClick(mode)}
                    className={`flex-1 text-center py-2 z-10 transition-colors duration-300 
                        ${
                            currentMode === mode
                                ? "text-black dark:text-white"
                                : "text-gray-700 dark:text-zinc-300"
                        }
                        ${disabled ? "" : "hover:text-black dark:hover:text-white"}`}
                >
                    {mode === "vsComputer" ? "Play against Computer" : "Play against Player"}
                </div>
            ))}
        </div>
    );
}

export default ModeToggle;
