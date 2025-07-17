function InputText({ id, name, value, onChange, disabled = false, className }) {
    return (
        <input
            type="text"
            id={id}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`border p-2 rounded-sm transition-colors duration-200
        ${
            disabled
                ? "bg-gray-100 dark:bg-zinc-700 text-gray-500 cursor-not-allowed"
                : "bg-white dark:bg-zinc-800 text-black dark:text-white border-gray-300 dark:border-zinc-600"
        } 
        ${className}`}
            disabled={disabled}
        />
    );
}

export default InputText;
