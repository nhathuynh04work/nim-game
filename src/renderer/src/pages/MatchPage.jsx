import { useLocation, useNavigate } from "react-router";
import { useEffect, useMemo, useState } from "react";
import Player from "../components/Player";
import GameArea from "../components/GameArea";
import ProgressBar from "../components/ProgressBar";
import ResultModal from "../components/ResultModal";
import ExitModal from "../components/ExitModal";
import Overlay from "../components/Overlay";
import TopBar from "../components/TopBar";
import Button from "../components/Button";
import robot from "../assets/images/character_robot_interact.png";
import zombie from "../assets/images/character_zombie_drag.png";
import getRandomNumber from "../helpers/getRandomNumber";
import getRandomArray from "../helpers/getRandomArray";
import saveMatchResult from "../helpers/saveMatchResult";
import saveCurrentMatchState from "../helpers/saveCurrentMatchState";
import getOptimalMove from "../helpers/getOptimalMove";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useAudio } from "../provider/AudioProvider";

function MatchPage() {
    const navigate = useNavigate();
    const { playMatch, playWin } = useAudio();
    const { state } = useLocation();

    // Destructure initial state
    const {
        player1,
        player2,
        difficulty,
        timeLimit,
        mode,
        activePlayer: savedActivePlayer,
        piles: savedPiles,
        time: savedTime,
        originalPiles: savedOriginalPiles,
        selectedPileIndex: savedSelectedPileIndex,
        selectedObjectIndex: savedSelectedObjectIndex,
        helpPlayer1: savedHelpPlayer1,
        helpPlayer2: savedHelpPlayer2
    } = state;

    // Match state
    const [countdown, setCountdown] = useState(3);
    const [hasStarted, setHasStarted] = useState(false);
    const [disabled, setDisabled] = useState("none");
    const [activePlayer, setActivePlayer] = useState(
        savedActivePlayer ?? (getRandomNumber(0, 1) === 0 ? player1 : player2)
    );

    const initialPiles = useMemo(() => savedPiles ?? getRandomArray(10, 20, 1, 5), []);

    const [piles, setPiles] = useState([...initialPiles]);
    const [originalPiles] = useState(savedOriginalPiles ?? [...initialPiles]);
    const [time, setTime] = useState(savedTime ?? timeLimit);
    const [winner, setWinner] = useState(null);
    const [showExitModal, setShowExitModal] = useState(false);
    const [selectedPileIndex, setSelectedPileIndex] = useState(savedSelectedPileIndex ?? null);
    const [selectedObjectIndex, setSelectedObjectIndex] = useState(
        savedSelectedObjectIndex ?? null
    );

    // Help feature state
    const [helpPlayer1, setHelpPlayer1] = useState(savedHelpPlayer1 ?? 3);
    const [helpPlayer2, setHelpPlayer2] = useState(savedHelpPlayer2 ?? 3);
    const [highlightPosition, setHighlightPosition] = useState(null);

    // Play match sound
    useEffect(() => playMatch(), []);

    // Countdown before match starts
    useEffect(() => {
        if (countdown > -1) {
            const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setHasStarted(true);
        }
    }, [countdown]);

    // Every time the piles change, check if there's a winner
    useEffect(() => {
        if (piles.length === 0) {
            setWinner(activePlayer);
            saveMatchResult({
                player1,
                player2,
                winner: activePlayer,
                piles: originalPiles,
                mode,
                difficulty
            });
            playWin();
        }
    }, [piles]);

    // Helper functions
    const switchTurn = () => {
        if (piles.length === 0) return;
        setActivePlayer((cur) => (cur === player1 ? player2 : player1));
        setTime(timeLimit);
    };

    const saveAndExit = () => {
        saveCurrentMatchState({
            player1,
            player2,
            piles,
            activePlayer,
            time,
            timeLimit,
            mode,
            difficulty,
            originalPiles,
            selectedPileIndex,
            selectedObjectIndex,
            helpPlayer1,
            helpPlayer2
        });
        navigate("/");
    };

    const highlightSuggestedMove = () => {
        const { pileIndex, objectIndex } = getOptimalMove(piles);
        setHighlightPosition({ pileIndex, objectIndex });
    };

    // Render: Countdown overlay
    if (!hasStarted) {
        return (
            <div className="w-screen h-screen bg-[#f7f6f9] dark:bg-zinc-900">
                <Overlay>
                    <p>{countdown === 0 ? "Go!" : countdown}</p>
                </Overlay>
            </div>
        );
    }

    // Render: Match end
    if (winner) {
        return (
            <div className="w-screen h-screen bg-[#f7f6f9] dark:bg-zinc-900">
                <ResultModal winner={winner} mode={mode} />
            </div>
        );
    }

    // Render: Match in progress
    return (
        <>
            <TopBar onClick={() => setShowExitModal(true)} disabled={disabled} />

            <div
                className="grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr_auto] w-full h-dvh bg-[#f7f6f9] dark:bg-zinc-900"
                style={{ height: "calc(100vh - 64px)" }}
            >
                {/* Player 1: Avatar and help button */}
                <div className="row-span-2 col-start-1 flex flex-col items-center justify-center self-start">
                    <Player
                        name={player1}
                        image={zombie}
                        isActive={activePlayer === player1}
                        shadowColor="green"
                    />
                    {activePlayer === player1 && helpPlayer1 > 0 && (
                        <Button
                            className="flex-1 px-4 mt-6 border border-green-600 text-green-600 hover:shadow-[0_0_12px_rgba(34,197,94,0.5)] dark:border-green-400 dark:text-green-400 dark:hover:shadow-[0_0_12px_rgba(134,239,172,0.6)] bg-transparent flex items-center transition-all duration-200"
                            onClick={() => {
                                if (!highlightPosition) {
                                    setHelpPlayer1((prev) => prev - 1);
                                    highlightSuggestedMove();
                                }
                            }}
                        >
                            Help <XMarkIcon className="w-3 h-3 ml-1" /> {helpPlayer1}
                        </Button>
                    )}
                </div>

                {/* Player 1: Progress Bar */}
                <div className="row-start-1 col-start-2 col-span-2">
                    <ProgressBar
                        isActive={activePlayer === player1}
                        side="right"
                        time={time}
                        setTime={setTime}
                        timeLimit={timeLimit}
                        color="green"
                        paused={showExitModal}
                    />
                </div>

                {/* Game Area */}
                <div className="row-start-2 col-start-2">
                    <GameArea
                        piles={piles}
                        setPiles={setPiles}
                        initialPiles={initialPiles}
                        time={time}
                        timeLimit={timeLimit}
                        difficulty={difficulty}
                        isComputerTurn={mode === "vsComputer" && activePlayer === player2}
                        switchTurn={switchTurn}
                        disabled={disabled}
                        setDisabled={setDisabled}
                        selectedPileIndex={selectedPileIndex}
                        setSelectedPileIndex={setSelectedPileIndex}
                        selectedObjectIndex={selectedObjectIndex}
                        setSelectedObjectIndex={setSelectedObjectIndex}
                        highlightPosition={highlightPosition}
                        setHighlightPosition={setHighlightPosition}
                    />
                </div>

                {/* Player 2: Progress Bar */}
                <div className="row-start-3 col-start-1 col-span-2">
                    <ProgressBar
                        isActive={activePlayer === player2}
                        side="left"
                        time={time}
                        setTime={setTime}
                        timeLimit={timeLimit}
                        color="blue"
                        paused={showExitModal}
                    />
                </div>

                {/* Player 2: Avatar and help button */}
                <div className="row-span-2 col-start-3 row-start-2 flex flex-col items-center justify-center self-end">
                    {activePlayer === player2 && mode !== "vsComputer" && helpPlayer2 > 0 && (
                        <Button
                            className="flex-1 px-4 mb-6 border border-blue-600 text-blue-600 hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] dark:border-blue-400 dark:text-blue-400 dark:hover:shadow-[0_0_12px_rgba(147,197,253,0.6)] bg-transparent flex items-center transition-all duration-200"
                            onClick={() => {
                                if (!highlightPosition) {
                                    setHelpPlayer2((prev) => prev - 1);
                                    highlightSuggestedMove();
                                }
                            }}
                        >
                            Help <XMarkIcon className="w-3 h-3 ml-1" /> {helpPlayer2}
                        </Button>
                    )}

                    <Player
                        name={player2}
                        image={robot}
                        flipped={true}
                        isActive={activePlayer === player2}
                        shadowColor="blue"
                    />
                </div>
            </div>

            {showExitModal && (
                <ExitModal onClose={() => setShowExitModal(false)} onSaveAndExit={saveAndExit} />
            )}
        </>
    );
}

export default MatchPage;
