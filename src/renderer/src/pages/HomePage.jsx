import { useEffect } from "react";
import { useAudio } from "../provider/AudioProvider";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import { useDarkMode } from "../provider/DarkModeProvider";

function HomePage() {
    const navigate = useNavigate();
    const { playBackground } = useAudio();
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
        playBackground();
    }, [playBackground]);

    return (
        <div className="flex-1 p-12 overflow-hidden">
            <div className="flex flex-col">
                <Heading className="text-8xl font-extralight leading-none">
                    Discover the Magic <br /> of Math Through Play
                </Heading>

                <p className="mt-12 font-extralight text-xl text-gray-700 dark:text-gray-300 max-w-xl">
                    NIM is a classic mathematical strategy game rooted in binary logic and XOR
                    operations. It's simple to learn, yet rich in complexity — perfect for curious
                    minds of all ages.
                </p>

                <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-xl">
                    This project was created by <strong>Noah</strong> to share the elegance of math
                    through interactive gameplay. Explore, learn, and enjoy the beauty of numbers in
                    action.
                </p>

                <div className="mt-12 flex gap-4 w-xl">
                    {/* Learn More Button */}
                    <Button
                        className="
                                flex-1 px-6 py-3 
                                border border-indigo-600 text-indigo-600  
                                hover:shadow-[0_0_12px_rgba(99,102,241,0.5)]
                                dark:border-indigo-400 dark:text-indigo-400  
                                dark:hover:shadow-[0_0_12px_rgba(129,140,248,0.6)]
                                bg-transparent
                                transition-all duration-200
                            "
                        onClick={() => navigate("/documentation")}
                    >
                        Learn More
                    </Button>
                    {/* Start Playing Button */}
                    <Button
                        className="
                            flex-1 px-6 py-3
                            bg-indigo-600 text-white 
                            hover:bg-indigo-700 
                            hover:shadow-[0_0_12px_rgba(99,102,241,0.5)]
                            dark:bg-indigo-500 
                            dark:hover:bg-indigo-400 
                            dark:hover:shadow-[0_0_12px_rgba(129,140,248,0.6)]
                            transition-all duration-200
                        "
                        onClick={() => navigate("/game")}
                    >
                        Start Playing
                    </Button>
                </div>

                <div
                    className="mt-14 h-dvh w-full rounded-xl"
                    style={{
                        backgroundColor: isDarkMode ? "#1e1e2f" : "#EEF1FF",
                        backgroundImage: isDarkMode
                            ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%23818cf8' fill-opacity='0.2'%3E%3Cpath d='M12 0h18v6h6v6h6v18h-6v6h-6v6H12v-6H6v-6H0V12h6V6h6V0zm12 6h-6v6h-6v6H6v6h6v6h6v6h6v-6h6v-6h6v-6h-6v-6h-6V6zm-6 12h6v6h-6v-6zm24 24h6v6h-6v-6z'/%3E%3C/g%3E%3C/svg%3E")`
                            : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%236366F1' fill-opacity='0.06'%3E%3Cpath d='M12 0h18v6h6v6h6v18h-6v6h-6v6H12v-6H6v-6H0V12h6V6h6V0zm12 6h-6v6h-6v6H6v6h6v6h6v6h6v-6h6v-6h6v-6h-6v-6h-6V6zm-6 12h6v6h-6v-6zm24 24h6v6h-6v-6z'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "32px 32px"
                    }}
                />
            </div>
        </div>
    );
}

export default HomePage;
