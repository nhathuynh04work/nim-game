function InputRadio({ name, id, value, label, checked, onChange, disabled }) {
    return (
        <label
            htmlFor={id}
            className={`flex items-center gap-2 text-sm cursor-pointer transition
                ${disabled ? "text-gray-400 dark:text-gray-500 cursor-not-allowed" : "text-gray-800 dark:text-gray-100"}
            `}
        >
            <div
                className={`
                    w-4 h-4 flex items-center justify-center rounded-full border-2
                    transition
                    ${checked ? "border-zinc-600 dark:border-zinc-300" : "border-gray-400 dark:border-gray-600"}
                    ${disabled ? "bg-gray-200 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}
                `}
            >
                {checked && <div className="w-2 h-2 rounded-full bg-zinc-600 dark:bg-zinc-300" />}
            </div>

            <input
                type="radio"
                name={name}
                id={id}
                value={value}
                checked={checked}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
                className="hidden"
            />

            {label}
        </label>
    );
}

export default InputRadio;
