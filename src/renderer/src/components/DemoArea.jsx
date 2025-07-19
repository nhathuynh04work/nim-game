import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import robot from "../assets/images/character_robot_interact.png";
import zombie from "../assets/images/character_zombie_drag.png";
import Player from "./Player";
import ProgressBar from "./ProgressBar";
import Pile from "./Pile";
import Button from "./Button";

function DemoArea({ step, moveNextStep }) {
    const navigate = useNavigate();
    const player1 = "Player 1",
        player2 = "Player 2";
    const [piles, setPiles] = useState([1, 4, 3]);
    const [activePlayer, setActivePlayer] = useState(null);
    const [selectedPileIndex, setSelectedPileIndex] = useState(null);
    const [selectedObjectIndex, setSelectedObjectIndex] = useState(null);
    const [highlightPosition, setHighlightPosition] = useState(null);
    const [time, setTime] = useState(15);

    // Select only works in a certain step and on certain objects
    const handleSelect = (pileIndex, objectIndex) => {
        if (
            pileIndex !== highlightPosition.pileIndex ||
            objectIndex !== highlightPosition.objectIndex
        )
            return;

        if (step === 1 || step === 2) {
            setSelectedPileIndex(pileIndex);
            setSelectedObjectIndex(objectIndex);
            setHighlightPosition(null);
            moveNextStep();
        } else if (step === 5) {
            setSelectedPileIndex(pileIndex);
            setSelectedObjectIndex(objectIndex);
            setHighlightPosition(null);
        }
    };

    // Remove only works in a certain step
    const handleRemove = () => {
        if (step === 3 || step === 5) {
            setPiles((prevPiles) => {
                const updated = prevPiles.map((count, i) => {
                    if (i !== selectedPileIndex) return count;
                    const numToRemove = count - selectedObjectIndex;
                    return Math.max(0, count - numToRemove);
                });

                return updated.filter((count) => count > 0);
            });

            setSelectedPileIndex(null);
            setSelectedObjectIndex(null);
            setActivePlayer(player2);
            moveNextStep();
        }
    };

    // Set the state for each step
    useEffect(() => {
        if (step === 0) {
            setPiles([1, 4, 3]);
            setSelectedPileIndex(null);
            setSelectedObjectIndex(null);
            setHighlightPosition(null);
        } else if (step === 1) {
            setHighlightPosition({ pileIndex: 2, objectIndex: 1 });
            setActivePlayer(player1);
        } else if (step === 2) {
            setHighlightPosition({ pileIndex: 1, objectIndex: 0 });
        } else if (step === 3) {
        } else if (step === 4) {
            setTime(5);
        } else if (step === 5) {
            setHighlightPosition({ pileIndex: 0, objectIndex: 0 });
        }
    }, [step]);

    // For step 4: Time runs out
    useEffect(() => {
        if (time > 0 || step !== 4) return;

        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        const performAutoMove = async () => {
            await delay(1000);
            setSelectedPileIndex(0);
            setSelectedObjectIndex(0);

            await delay(1000);
            setPiles((prevPiles) => {
                const updated = prevPiles.map((count, i) => {
                    if (i !== 0) return count;
                    const numToRemove = count;
                    return Math.max(0, count - numToRemove);
                });

                return updated.filter((count) => count > 0);
            });
            setActivePlayer(player1);
            setSelectedPileIndex(null);
            setSelectedObjectIndex(null);
            moveNextStep();
        };

        performAutoMove();
    }, [time]);

    return step !== 6 ? (
        <div className="h-full relative">
            <div className="grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr_auto] w-full h-full">
                <div className="row-span-2 col-start-1 flex items-center justify-center self-start">
                    <Player
                        name={player1}
                        image={zombie}
                        isActive={step === 0 ? true : activePlayer === player1}
                    />
                </div>

                <div className="row-start-1 col-start-2 col-span-2">
                    <ProgressBar
                        isActive={step === 0 ? true : activePlayer === player1}
                        side="right"
                        time={15}
                        setTime={setTime}
                        timeLimit={15}
                        color="green"
                        paused={false}
                    />
                </div>

                <div className="row-start-2 col-start-2 flex flex-col justify-center items-center gap-8">
                    <div className="flex gap-2 justify-center">
                        {piles.map((pile, index) => (
                            <Pile
                                numObjects={pile}
                                key={index}
                                pileIndex={index}
                                disabled="none"
                                highlightPosition={highlightPosition}
                                onSelect={handleSelect}
                                selectedObjectIndex={
                                    index === selectedPileIndex ? selectedObjectIndex : null
                                }
                            />
                        ))}
                    </div>
                    <Button
                        className="bg-zinc-200 text-zinc-900 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600"
                        onClick={handleRemove}
                    >
                        Remove
                    </Button>
                </div>

                <div className="row-start-3 col-start-1 col-span-2">
                    <ProgressBar
                        isActive={step === 0 ? true : activePlayer === player2}
                        side="left"
                        time={step === 4 ? time : 15}
                        setTime={setTime}
                        timeLimit={15}
                        color="green"
                        paused={false}
                    />
                </div>

                <div className="row-span-2 col-start-3 row-start-2 flex items-center justify-center self-end">
                    <Player
                        name={player2}
                        image={robot}
                        flipped={true}
                        isActive={step === 0 ? true : activePlayer === player2}
                    />
                </div>
            </div>
        </div>
    ) : (
        <div className="absolute inset-0 flex items-center justify-center z-50 px-4">
            <div
                className="
            w-full max-w-md p-8 rounded-xl border text-center shadow-lg transition-all duration-300
            bg-white text-zinc-900 border-gray-100
            dark:bg-zinc-900 dark:text-zinc-100 dark:border-gray-500/20
        "
            >
                <h2 className="text-3xl font-extralight mb-12 dark:text-white">Ready to play?</h2>

                <div className="flex gap-4">
                    {/* Outlined button with hover glow */}
                    <Button
                        className="
                    flex-1 py-3 
                    border border-indigo-500 text-indigo-600 
                    hover:shadow-[0_0_12px_rgba(99,102,241,0.4)]
                    dark:border-indigo-400 dark:text-indigo-400
                    dark:hover:shadow-[0_0_12px_rgba(129,140,248,0.5)]
                    transition-all duration-200
                "
                        onClick={() => navigate("/documentation")}
                    >
                        Learn More
                    </Button>

                    {/* Filled button with hover glow */}
                    <Button
                        className="
                    flex-1 py-3 
                    bg-indigo-600 text-white 
                    hover:bg-indigo-700 
                    hover:shadow-[0_0_16px_rgba(99,102,241,0.5)]
                    dark:bg-indigo-500 dark:hover:bg-indigo-400
                    dark:hover:shadow-[0_0_16px_rgba(129,140,248,0.6)]
                    transition-all duration-200
                "
                        onClick={() => navigate("/game")}
                    >
                        Start Playing
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default DemoArea;
