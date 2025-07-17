import { disabledReason } from "../variables";
import { Tooltip } from "react-tooltip";

function Button({ type, children, onClick, className = "", disabled = disabledReason.NONE }) {
    const isDisabled = disabled !== disabledReason.NONE;

    const baseClass = `
        rounded-sm transition-opacity duration-300 
        ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`;

    if (type === "x") {
        return (
            <button onClick={onClick} className={`${baseClass} px-2 py-2`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
            </button>
        );
    }

    return (
        <>
            <button
                onClick={!isDisabled ? onClick : null}
                className={`px-4 py-1.5 ${baseClass} ${className}`}
                data-tooltip-id="button-tooltip"
                data-tooltip-content={isDisabled ? disabled : undefined}
            >
                {children}
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

export default Button;
