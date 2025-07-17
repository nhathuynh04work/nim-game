import { useState } from "react";
import { useNavigate } from "react-router";
import InputText from "./InputText";
import ModeToggle from "./ModeToggle";
import InputSelect from "./InputSelect";
import Button from "./Button";

const timeLimitOptions = [
    {
        title: "5 seconds",
        value: "5"
    },
    {
        title: "10 seconds",
        value: "10"
    },
    {
        title: "15 seconds",
        value: "15"
    },
    {
        title: "20 seconds",
        value: "20"
    }
];

const difficultyOptions = [
    {
        title: "Easy",
        value: "easy"
    },
    {
        title: "Hard",
        value: "hard"
    }
];

function GameSetup() {
    const navigate = useNavigate();

    const [mode, setMode] = useState("vsComputer");
    const [player1, setPlayer1] = useState("Player 1");
    const [player2, setPlayer2] = useState(mode === "vsComputer" ? "Computer" : "Player 2");
    const [difficulty, setDifficulty] = useState("easy");
    const [timeLimit, setTimeLimit] = useState("15");

    const handleChangeMode = (mode) => {
        setMode(mode);
        if (mode === "vsComputer") {
            setPlayer2("Computer");
        } else {
            setPlayer2("Player 2");
        }
    };

    const handleStart = (e) => {
        e.preventDefault();

        navigate("/match", {
            state: {
                player1,
                player2,
                difficulty,
                timeLimit,
                mode
            }
        });
    };

    return (
        <div className="w-full mt-16 rounded-md border border-zinc-300 bg-zinc-100 p-10 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 relative">
            <span className="absolute -top-3 left-3 text-xs px-2 py-0.5 rounded-sm bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200">
                Setup
            </span>

            <ModeToggle currentMode={mode} onClick={handleChangeMode} />

            {/* Names */}
            <div className="w-full flex justify-between items-center gap-8 mt-12">
                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="player1" className="text-[10px]">
                        Player 1
                    </label>
                    <InputText id="player1" name="player1" value={player1} onChange={setPlayer1} />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="player2" className="text-[10px]">
                        Player 2
                    </label>
                    <InputText
                        id="player2"
                        name="player2"
                        value={player2}
                        onChange={setPlayer2}
                        disabled={mode === "vsComputer"}
                    />
                </div>
            </div>

            <div className="w-full border-t border-zinc-300/20 my-12"></div>

            {/* Time limit & Difficulty */}
            <div className="w-full flex justify-between items-center gap-8">
                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="time-limit-select" className="text-[10px]">
                        Time limit
                    </label>
                    <InputSelect
                        name="time-limit"
                        id="time-limit-select"
                        value={timeLimit}
                        onChange={setTimeLimit}
                        options={timeLimitOptions}
                    />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="difficulty-select" className="text-[10px]">
                        Difficulty [vsComputer]
                    </label>
                    <InputSelect
                        name="difficulty"
                        id="difficulty-select"
                        value={difficulty}
                        onChange={setDifficulty}
                        options={difficultyOptions}
                        disabled={mode === "vsPlayer"}
                    />
                </div>
            </div>

            <Button
                className="w-full mt-20 py-3 border border-green-800 text-green-800 bg-transparent hover:bg-green-800 hover:text-white dark:hover:text-zinc-200 transition-colors duration-200"
                onClick={handleStart}
            >
                Start New Game
            </Button>
        </div>
    );
}

export default GameSetup;
