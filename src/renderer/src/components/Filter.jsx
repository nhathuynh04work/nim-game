function Filter({ filterMode, onFilterChange }) {
    return (
        <div className="flex gap-4 items-center">
            <label className="font-medium text-zinc-800 dark:text-zinc-100">Filter by Mode:</label>
            <select
                value={filterMode}
                onChange={(e) => onFilterChange(e.target.value)}
                className="border border-zinc-300 dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 transition-colors duration-300"
            >
                <option value="all">All</option>
                <option value="vsComputer">vsComputer</option>
                <option value="vsPlayer">vsPlayer</option>
            </select>
        </div>
    );
}
export default Filter;
