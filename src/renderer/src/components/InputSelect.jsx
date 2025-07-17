function InputSelect({ name, id, value, onChange, disabled, options }) {
    return (
        <div className="relative">
            <select
                name={name}
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`appearance-none w-full border p-2 pr-7 rounded-sm transition-colors duration-300
                ${
                    disabled
                        ? "bg-gray-100 dark:bg-zinc-700 text-gray-500 cursor-not-allowed"
                        : "bg-white dark:bg-zinc-800 text-black dark:text-white border-gray-300 dark:border-zinc-600"
                }`}
                disabled={disabled}
            >
                {options.map((option, index) => (
                    <option value={option.value} key={index}>
                        {option.title}
                    </option>
                ))}
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700 dark:text-gray-300">
                ▼
            </div>
        </div>
    );
}

export default InputSelect;
