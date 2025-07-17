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
                        className={`${
                            activePlayer === player2
                                ? "border border-green-600 font-semibold bg-green-50 dark:bg-green-900/30"
                                : ""
                        }`}
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
                    <TimerBar time={time} timeLimit={timeLimit} />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="piles" className="text-[10px]">
                        Piles left
                    </label>
                    <InputText name="piles" id="piles" value={piles.length} disabled={true} />
                </div>
            </div>

            <div className="flex gap-1 items-center">
                <Button
                    className="w-1/4 mt-20 py-3 
                   border border-zinc-400 text-zinc-700 
                   bg-transparent 
                   hover:border-red-700 hover:bg-red-700 hover:text-white 
                   dark:border-zinc-600 dark:text-zinc-200 
                   dark:hover:bg-red-700 dark:hover:text-white 
                   transition-colors duration-200"
                    onClick={handleDiscard}
                >
                    Discard
                </Button>

                <Button
                    className="w-3/4 mt-20 py-3 
                   border border-zinc-400 text-zinc-700 
                   bg-transparent 
                   hover:border-green-700 hover:bg-green-700 hover:text-white 
                   dark:border-zinc-600 dark:text-zinc-200 
                   dark:hover:bg-green-700 dark:hover:text-white 
                   transition-colors duration-200"
                    onClick={handleContinue}
                >
                    Continue Playing
                </Button>
            </div>
        </div>
    );
}

export default ContinuePlaying;
