import { disabledReason } from "../variables";

function ObjectComponent({ isSelected, onClick, disabled }) {
    return (
        <div
            className={`min-w-12 min-h-2.5 rounded-[2px] transition-all duration-200
                ${
                    isSelected
                        ? "bg-blue-300 dark:bg-blue-400"
                        : "bg-emerald-300 dark:bg-emerald-400"
                }
                ${
                    disabled !== disabledReason.NONE
                        ? "opacity-80 cursor-not-allowed"
                        : "cursor-pointer"
                }`}
            onClick={disabled !== disabledReason.NONE ? undefined : onClick}
        />
    );
}

export default ObjectComponent;
