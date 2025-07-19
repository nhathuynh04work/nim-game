import Heading from "../components/Heading";

function HistoryPage() {
    const timeline = [
        {
            year: "500 AD",
            title: "Ancient Origins",
            description:
                "Early forms of NIM-like games were played in China, such as 'Jiǎn shízi' (picking stones)."
        },
        {
            year: "1901",
            title: "Mathematical Breakthrough",
            description:
                "Charles L. Bouton formally solved NIM using binary logic and introduced the NIM-sum."
        },
        {
            year: "1940",
            title: "Nimatron",
            description:
                "A massive electro-mechanical machine called the Nimatron played NIM at the New York World's Fair."
        },
        {
            year: "1950s",
            title: "Game Theory & AI",
            description:
                "NIM influenced early work in combinatorial game theory and was studied by John von Neumann."
        },
        {
            year: "Today",
            title: "Digital Version",
            description:
                "NIM is used in classrooms and games to teach binary logic. This project brings it to life interactively."
        }
    ];

    return (
        <div className="flex-1 p-12 overflow-auto">
            <div className="p-6 text-gray-700 dark:text-gray-300 max-w-3xl space-y-10 relative">
                <Heading className="mb-12">History of NIM</Heading>

                <div className="space-y-10 border-l-2 border-indigo-500 dark:border-indigo-300 pl-6">
                    {timeline.map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-9 top-0 w-6 h-6 bg-indigo-500 dark:bg-indigo-300 rounded-full border-4 border-white dark:border-zinc-800" />

                            <div className="mb-2 text-sm text-indigo-700 dark:text-indigo-300 font-semibold">
                                {item.year}
                            </div>

                            <div className="text-lg font-bold mb-1">{item.title}</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HistoryPage;
