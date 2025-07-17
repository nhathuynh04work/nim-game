import { useNavigate } from "react-router";
import { useDarkMode } from "../provider/DarkModeProvider";
import { disabledReason } from "../variables";
import { Tooltip } from "react-tooltip";

function Logo({ onClick, disabled }) {
    const { isDarkMode } = useDarkMode();
    const navigate = useNavigate();
    const isDisabled = disabled !== disabledReason.NONE;

    const handleClick = () => {
        if (isDisabled) return;

        if (onClick) onClick();
        else navigate("/");
    };

    return (
        <>
            <button
                className={`group flex items-center gap-1 px-2 py-1 rounded-sm transition-colors duration-300
                ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                text-zinc-700 hover:text-zinc-900
                dark:text-zinc-300 dark:hover:text-white
                `}
                onClick={handleClick}
                data-tooltip-id="button-tooltip"
                data-tooltip-content={isDisabled ? disabled : undefined}
            >
                <img
                    src={isDarkMode ? "/icons/logo-dark.svg" : "/icons/logo-light.svg"}
                    alt="Logo"
                    width="32"
                    height="32"
                />
            </button>
            {isDisabled && (
                <Tooltip
                    id="button-tooltip"
                    place="right"
                    style={{
                        fontSize: "0.75rem",
                        padding: "0.25rem 0.5rem",
                        backgroundColor: "#333",
                        color: "#fff",
                        borderRadius: "0.25rem"
                    }}
                />
            )}
        </>
    );
}

export default Logo;
