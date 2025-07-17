import { disabledReason } from "../variables";
import ObjectComponent from "./ObjectComponent";

function Pile({ pileIndex, numObjects, selectedObjectIndex, onSelect, disabled }) {
    const isDisabled = disabled !== disabledReason.NONE;

    return (
        <div
            className={`flex flex-col justify-end gap-1.5 px-2 py-3 rounded-md h-26 
                bg-gray-200 dark:bg-zinc-800 
                border border-gray-300 dark:border-zinc-600
                transition-opacity duration-200
                ${isDisabled ? "opacity-50 pointer-events-none" : ""}`}
        >
            {Array.from({ length: numObjects }).map((_, index) => (
                <ObjectComponent
                    key={index}
                    isSelected={selectedObjectIndex !== null && index >= selectedObjectIndex}
                    onClick={() => onSelect(pileIndex, index)}
                    disabled={disabled}
                />
            ))}
        </div>
    );
}

export default Pile;
