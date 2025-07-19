import { disabledReason } from "../variables";

function ObjectComponent({ isSelected, onClick, disabled, highlighted }) {
    const isDisabled = disabled !== disabledReason.NONE;

    const bgClass = isSelected
        ? "bg-amber-400 dark:bg-amber-300"
        : highlighted
          ? "bg-emerald-300 dark:bg-emerald-400"
          : "bg-indigo-400 dark:bg-indigo-500";

    const shadowClass = highlighted ? "shadow-[0_0_8px_rgba(52,211,153,0.6)]" : "";

    const interactionClass = isDisabled
        ? "cursor-not-allowed opacity-70 brightness-90"
        : "cursor-pointer hover:scale-[1.05]";

    return (
        <div
            className={`min-w-12 min-h-2.5 rounded-[2px] transition-all duration-200 ease-out
                ${bgClass}
                ${shadowClass}
                ${interactionClass}
            `}
            onClick={isDisabled ? undefined : onClick}
        />
    );
}

export default ObjectComponent;
