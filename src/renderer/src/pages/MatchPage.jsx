import { useLocation, useNavigate } from "react-router";
import { useEffect, useMemo, useState } from "react";
import Player from "../components/Player";
import robot from "../assets/images/character_robot_interact.png";
import zombie from "../assets/images/character_zombie_drag.png";
import GameArea from "../components/GameArea";
import ProgressBar from "../components/ProgressBar";
import getRandomNumber from "../helpers/getRandomNumber";
import getRandomArray from "../helpers/getRandomArray";
import ResultModal from "../components/ResultModal";
import saveMatchResult from "../helpers/saveMatchResult";
import Overlay from "../components/Overlay";
import TopBar from "../components/TopBar";
import ExitModal from "../components/ExitModal";
import saveCurrentMatchState from "../helpers/saveCurrentMatchState";
import { useAudio } from "../provider/AudioProvider";
import DecorationColumn from "../components/DecorationColumn";

function MatchPage() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(3);
    const [hasStarted, setHasStarted] = useState(false);
    const [disabled, setDisabled] = useState("none");
    const { playMatch, playWin } = useAudio();

    const { state } = useLocation();
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
        selectedObjectIndex: savedSelectedObjectIndex
    } = state;

    const [activePlayer, setActivePlayer] = useState(
        savedActivePlayer ?? (getRandomNumber(0, 1) === 0 ? player1 : player2)
    );

    const initialPiles = useMemo(
        () => savedPiles ?? getRandomArray(10, 20, 1, 5),
        [] // Only compute once
    );
    const [piles, setPiles] = useState([...initialPiles]);
    const [originalPiles] = useState(savedOriginalPiles ?? [...initialPiles]);

    const [time, setTime] = useState(savedTime ?? timeLimit);
    const [winner, setWinner] = useState(null);
    const [showExitModal, setShowExitModal] = useState(false);
    const [selectedPileIndex, setSelectedPileIndex] = useState(savedSelectedPileIndex ?? null);
    const [selectedObjectIndex, setSelectedObjectIndex] = useState(
        savedSelectedObjectIndex ?? null
    );

    const switchTurn = () => {
        if (piles.length === 0) return;

        // change activePlayer and reset time
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
            selectedObjectIndex
        });

        navigate("/");
    };

    // Load sound
    useEffect(() => playMatch(), []);

    // Countdown logic
    useEffect(() => {
        if (countdown > -1) {
            const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setHasStarted(true);
        }
    }, [countdown]);

    // Check match is finished
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

    // Countdown before starting
    if (!hasStarted)
        return (
            <div className="w-screen h-screen bg-[#f7f6f9] dark:bg-zinc-900">
                <Overlay>
                    <p>{countdown === 0 ? "Go!" : countdown}</p>
                </Overlay>
            </div>
        );

    // Match is finished
    if (winner)
        return (
            <div className="w-screen h-screen bg-[#f7f6f9] dark:bg-zinc-900">
                <ResultModal winner={winner} />
            </div>
        );

    return (
        <>
            <TopBar onClick={() => setShowExitModal(true)} disabled={disabled} />

            <div
                className="grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr_auto] w-full h-dvh bg-[#f7f6f9] dark:bg-zinc-900"
                style={{ height: "calc(100vh - 64px)" }}
            >
                <div className="row-span-2 col-start-1 flex items-center justify-center self-start">
                    <Player
                        name={player1}
                        image={zombie}
                        isActive={activePlayer === player1}
                        shadowColor="green"
                    />
                </div>

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
                    />
                </div>

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

                <div className="row-span-2 col-start-3 row-start-2 flex items-center justify-center self-end">
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
