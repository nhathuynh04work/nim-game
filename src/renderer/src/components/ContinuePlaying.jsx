import { useNavigate } from "react-router";
import capitalizeFirstLetter from "../helpers/capitalizeFirstLetter";
import Button from "./Button";
import InputText from "./InputText";
import ModeToggle from "./ModeToggle";
import TimerBar from "./TimerBar";

function ContinuePlaying({ savedMatch, setSavedMatch }) {
    const navigate = useNavigate();
    const { player1, player2, piles, activePlayer, time, timeLimit, mode, difficulty } = savedMatch;

    const handleContinue = () => {
        navigate("/match", {
            state: { ...savedMatch }
        });

        localStorage.removeItem("savedMatch");
        setSavedMatch(null);
    };

    const handleDiscard = () => {
        const confirmed = confirm("This will remove the saved match permanently. Are you sure?");

        if (confirmed) {
            localStorage.removeItem("savedMatch");
            setSavedMatch(null);
        }
    };

    return (
        <div className="w-full mt-16 rounded-md border border-zinc-300 bg-zinc-100 p-10 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 relative">
            <span className="absolute -top-3 left-3 text-xs px-2 py-0.5 rounded-sm bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200">
                Saved Match
            </span>

            <ModeToggle currentMode={mode} disabled={true} />

            {/* Names */}
            {/* Names */}
            <div className="w-full flex justify-between items-center gap-8 mt-12">
                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="player1" className="text-[10px]">
                        {mode === "vsComputer" ? "Player" : "Player 1"}
                    </label>
                    <InputText
                        id="player1"
                        name="player1"
                        value={player1}
                        disabled={true}
                        className={`${
                            activePlayer === player1
                                ? "border-2 border-green-600 font-semibold bg-green-50 dark:bg-green-900/30"
                                : ""
                        }`}
                    />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="player2" className="text-[10px]">
                        {mode === "vsComputer" ? "Computer" : "Player 2"}
                    </label>
                    <InputText
                        id="player2"
                        name="player2"
                        value={
                            mode === "vsComputer"
                                ? `${player2}[${capitalizeFirstLetter(difficulty)}]`
                                : player2
                        }
                        disabled={true}
                        className={`transition-colors duration-200 ${
                            activePlayer === player2
                                ? "border border-indigo-300 font-semibold bg-indigo-50 dark:bg-indigo-900/30"
                                : "border border-zinc-300 dark:border-zinc-700"
                        }`}
                    />
                </div>
            </div>

            <div className="w-full border-t border-zinc-300/20 my-12"></div>

            {/* Time limit & Difficulty */}
            <div className="w-full flex justify-between items-center gap-8">
                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="time-limit-select" className="text-[10px]">
                        Time left
                    </label>
                    <TimerBar time={time} timeLimit={timeLimit} />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="piles" className="text-[10px]">
                        Piles left
                    </label>
                    <InputText name="piles" id="piles" value={piles.length} disabled={true} />
                </div>
            </div>

            <div className="flex gap-4 items-center">
                <Button
                    className="w-1/4 mt-20 py-3 
                                border border-indigo-600 text-indigo-600  
                                hover:shadow-[0_0_12px_rgba(99,102,241,0.5)]
                                dark:border-indigo-400 dark:text-indigo-400  
                                dark:hover:shadow-[0_0_12px_rgba(129,140,248,0.6)]
                                bg-transparent
                                transition-all duration-200"
                    onClick={handleDiscard}
                >
                    Discard
                </Button>

                <Button
                    className="w-3/4 mt-20 py-3 
                bg-indigo-600 text-white 
                            hover:bg-indigo-700 
                            hover:shadow-[0_0_12px_rgba(99,102,241,0.5)]
                            dark:bg-indigo-500 
                            dark:hover:bg-indigo-400 
                            dark:hover:shadow-[0_0_12px_rgba(129,140,248,0.6)]
                            transition-all duration-200"
                    onClick={handleContinue}
                >
                    Continue Playing
                </Button>
            </div>
        </div>
    );
}

export default ContinuePlaying;
