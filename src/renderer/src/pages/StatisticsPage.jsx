import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import StatisticsTable from "../components/StatisticsTable";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { TrashIcon } from "@heroicons/react/24/outline";

function StatisticsPage() {
    const [filterMode, setFilterMode] = useState("all");
    const [allMatches, setAllMatches] = useState([]);

    // Load matches from localStorage
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("nim-history")) || [];
        setAllMatches(saved);
    }, []);

    // Filter matches by mode
    const filteredMatches = allMatches.filter((match) => {
        return filterMode === "all" || match.mode === filterMode;
    });

    const handleClearHistory = () => {
        const confirmed = confirm("Are you sure you want to clear your match history?");
        if (!confirmed) return;

        localStorage.removeItem("nim-history");
        setAllMatches([]);
    };

    return (
        <div className="flex-1 p-12 overflow-auto">
            <div
                className="overflow-auto
                    bg-white text-gray-800 
                    dark:bg-[#1c1e24] dark:text-gray-100 
                    transition-colors duration-200 flex flex-col gap-4"
            >
                <Heading>Statistics</Heading>

                {/* Filter and Clear Button in Same Row */}
                <div className="flex justify-between items-center my-4">
                    <Filter filterMode={filterMode} onFilterChange={setFilterMode} />
                    <Button
                        className="flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 hover:shadow-[0_0_12px_rgba(99,102,241,0.5)] dark:border-indigo-400 dark:text-indigo-400 dark:hover:shadow-[0_0_12px_rgba(129,140,248,0.6)] bg-transparent transition-all duration-200"
                        onClick={handleClearHistory}
                    >
                        <TrashIcon className="w-4 h-4 mr-1" />
                        Clear history
                    </Button>
                </div>

                <StatisticsTable matches={filteredMatches} />
            </div>
        </div>
    );
}

export default StatisticsPage;
