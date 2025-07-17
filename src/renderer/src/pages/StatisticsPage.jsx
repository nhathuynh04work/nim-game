import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import StatisticsTable from "../components/StatisticsTable";
import Heading from "../components/Heading";

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

    return (
        <div
            className="overflow-auto
                        bg-white text-gray-800 
                        dark:bg-[#1c1e24] dark:text-gray-100 
                        transition-colors duration-200 flex flex-col gap-4"
        >
            <Heading>Statistics</Heading>
            <Filter filterMode={filterMode} onFilterChange={setFilterMode} />
            <StatisticsTable matches={filteredMatches} />
        </div>
    );
}

export default StatisticsPage;
