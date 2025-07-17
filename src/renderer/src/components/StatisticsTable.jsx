import DataTable, { createTheme } from "react-data-table-component";
import { useDarkMode } from "../provider/DarkModeProvider";

createTheme("neutralDark", {
    text: {
        primary: "#e4e4e7", // Tailwind zinc-200
        secondary: "#a1a1aa" // Tailwind zinc-400
    },
    background: {
        default: "#18181b" // Tailwind zinc-900
    },
    context: {
        background: "#27272a", // Tailwind zinc-800
        text: "#ffffff"
    },
    divider: {
        default: "#3f3f46" // Tailwind zinc-700
    },
    striped: {
        default: "#1f1f23",
        text: "#e4e4e7"
    },
    pagination: {
        button: {
            default: "#a1a1aa", // Normal state
            hover: "#e4e4e7", // On hover
            focus: "#f4f4f5", // On focus
            disabled: "#3f3f46" // Disabled state
        },
        background: "#18181b", // Pagination bar background
        text: "#e4e4e7" // Rows per page text
    }
});

function StatisticsTable({ matches }) {
    const { isDarkMode } = useDarkMode();

    const columns = [
        {
            name: "Player 1",
            selector: (row) => row.player1
        },
        {
            name: "Player 2",
            selector: (row) =>
                row.mode === "vsComputer"
                    ? `Computer[${row.difficulty.charAt(0).toUpperCase()}${row.difficulty.slice(1)}]`
                    : row.player2
        },
        {
            name: "Winner",
            selector: (row) => row.winner
        },
        {
            name: "Mode",
            selector: (row) => row.mode
        },
        {
            name: "Piles",
            selector: (row) => row.piles.join(", ")
        },
        {
            name: "Time",
            selector: (row) => new Date(row.timestamp).toLocaleString(),
            sortable: true
        }
    ];

    return (
        <div className="rounded-md border border-zinc-200 dark:border-zinc-700">
            <DataTable
                columns={columns}
                data={matches}
                pagination
                highlightOnHover
                striped
                theme={isDarkMode ? "neutralDark" : "default"}
                key={isDarkMode ? "dark" : "light"}
                fixedHeader
                fixedHeaderScrollHeight="60vh" // scrolls only table body
            />
        </div>
    );
}

export default StatisticsTable;
