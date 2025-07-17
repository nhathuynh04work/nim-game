function Player({ name, image, flipped = false, isActive, shadowColor }) {
    const getShadowClass = () => {
        if (!isActive) return "";

        if (shadowColor === "blue") {
            return `
                shadow-[inset_0_0_20px_rgba(59,130,246,0.5)] 
                dark:shadow-[inset_0_0_20px_rgba(147,197,253,0.4)]`; // light-blue-400
        }

        // green shadow
        return `
            shadow-[inset_0_0_20px_rgba(34,197,94,0.5)] 
            dark:shadow-[inset_0_0_20px_rgba(134,239,172,0.4)]`; // light-green-300
    };

    return (
        <div
            className={`px-4 pb-4 border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 
                text-gray-900 dark:text-gray-100 flex flex-col gap-2 max-w-3xs items-center
                transition-shadow duration-300 ${getShadowClass()}`}
        >
            <img
                src={image}
                alt={`${name}'s character`}
                className={`${flipped ? "scale-x-[-1]" : ""} transition duration-300 ${!isActive ? "opacity-40" : ""}`}
            />
            <span className="mt-2">{name}</span>
        </div>
    );
}

export default Player;
