import { Link } from "react-router";
import Heading from "../components/Heading";
import {
    BookOpenIcon,
    ClipboardDocumentCheckIcon,
    CalculatorIcon,
    PlayIcon,
    UsersIcon,
    UserCircleIcon
} from "@heroicons/react/24/outline";

function DocumentationInfoPage() {
    const sections = [
        {
            title: "History",
            description: "Learn about the origin and evolution of the NIM game.",
            to: "/documentation/history",
            icon: BookOpenIcon
        },
        {
            title: "Rules",
            description: "Understand how to play NIM and the basic gameplay flow.",
            to: "/documentation/rules",
            icon: ClipboardDocumentCheckIcon
        },
        {
            title: "Mathematics",
            description: "Discover the mathematical strategy and logic behind NIM.",
            to: "/documentation/mathematics",
            icon: CalculatorIcon
        },
        {
            title: "Demo",
            description: "Try an interactive demo to visualize the gameplay in action.",
            to: "/documentation/demo",
            icon: PlayIcon
        },
        {
            title: "Credits",
            description: "Acknowledgements to those who contributed to the project.",
            to: "/documentation/credits",
            icon: UsersIcon
        },
        {
            title: "Author",
            description: "Learn more about the creator and the motivation behind the game.",
            to: "/documentation/author",
            icon: UserCircleIcon
        }
    ];

    return (
        <div className="flex-1 p-12 overflow-auto">
            <div className="p-6">
                <Heading className="mb-12">About Documentation</Heading>

                <p className="mb-16 text-gray-700 dark:text-gray-300 max-w-3xl">
                    Welcome to the documentation section! Here you can explore different aspects of
                    the NIM Game — from its historical origins to mathematical strategies and
                    interactive learning. Dive in and discover the logic behind the game.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {sections.map(({ title, description, to, icon: Icon }) => (
                        <Link
                            key={title}
                            to={to}
                            className="
                            flex gap-4 items-start
                            bg-white dark:bg-zinc-800 
                            border border-zinc-200 dark:border-zinc-700 
                            rounded-md p-4 
                            hover:shadow-md hover:border-indigo-500 
                            transition-all duration-200
                        "
                        >
                            <Icon className="w-6 h-6 text-indigo-500 dark:text-indigo-300 mt-1" />
                            <div>
                                <h3 className="text-indigo-700 dark:text-indigo-300 text-lg font-semibold mb-1">
                                    {title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    {description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DocumentationInfoPage;
