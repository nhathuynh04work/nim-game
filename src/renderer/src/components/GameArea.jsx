import { useEffect, useState } from "react";
import Pile from "./Pile";
import Button from "./Button";
import toast, { Toaster } from "react-hot-toast";
import getRandomNumber from "../helpers/getRandomNumber";
import getOptimalMove from "../helpers/getOptimalMove";
import arraysEqual from "../helpers/arraysEqual";
import { disabledReason } from "../variables";

function GameArea({
    piles,
    time,
    timeLimit,
    setPiles,
    difficulty,
    isComputerTurn,
    switchTurn,
    initialPiles,
    disabled,
    setDisabled,
    selectedPileIndex,
    setSelectedPileIndex,
    selectedObjectIndex,
    setSelectedObjectIndex,
    highlightPosition,
    setHighlightPosition
}) {
    const getAutomaticMove = (difficulty = "easy") => {
        if (isComputerTurn && difficulty === "hard") {
            return getOptimalMove(piles);
        }
        if (isComputerTurn && difficulty === "easy") {
            const pileIndex = getRandomNumber(0, piles.length - 1);
            const objectIndex = getRandomNumber(0, piles[pileIndex] - 1);
            return { pileIndex, objectIndex };
        }
        return { pileIndex: 0, objectIndex: piles[0] - 1 };
    };

    const resetSelected = () => {
        setSelectedPileIndex(null);
        setSelectedObjectIndex(null);
    };

    const selectObjects = (pileIndex, objectIndex) => {
        setSelectedPileIndex(pileIndex);
        setSelectedObjectIndex(objectIndex);
    };

    const removeSelectedObjects = (pileIndex, objectIndex) => {
        if (pileIndex === null || objectIndex === null) {
            toast.error("Select an object before removing!");
            return;
        }

        setPiles((prev) => {
            const updated = [...prev];
            const count = updated[pileIndex];
            const numToRemove = count - objectIndex;
            updated[pileIndex] = Math.max(0, count - numToRemove);
            return updated.filter((c) => c > 0);
        });
    };

    // When time runs out
    useEffect(() => {
        if (time > 0 || isComputerTurn || piles.length === 0 || timeLimit == 99) return;

        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        const performAutoMove = async () => {
            setDisabled(disabledReason.TIMEOUT);

            const { pileIndex, objectIndex } = getAutomaticMove();

            await delay(1000);
            selectObjects(pileIndex, objectIndex);

            await delay(1000);
            removeSelectedObjects(pileIndex, objectIndex);

            resetSelected();
            setDisabled(disabledReason.NONE);
        };

        performAutoMove();
    }, [time]);

    // Computer move
    useEffect(() => {
        if (!isComputerTurn) return;

        setDisabled(disabledReason.COMPUTER);

        if (time == timeLimit - 2 && (selectedPileIndex == null || selectedObjectIndex == null)) {
            const { pileIndex, objectIndex } = getAutomaticMove(difficulty);
            setSelectedPileIndex(pileIndex);
            setSelectedObjectIndex(objectIndex);
        }

        if (time == timeLimit - 4) {
            // Takes another 2 seconds to remove the objects
            removeSelectedObjects(selectedPileIndex, selectedObjectIndex);
            resetSelected();
            setDisabled(disabledReason.NONE);
        }
    }, [isComputerTurn, time]);

    // When piles updated, switch turn and reset selected
    useEffect(() => {
        if (arraysEqual(piles, initialPiles) || piles.length === 0) return; // for initial render

        setHighlightPosition(null);
        resetSelected();
        switchTurn();
    }, [piles]);

    return (
        <div className="flex flex-col items-center gap-8 justify-center h-full p-6">
            <Toaster />
            <div className="flex gap-2 flex-wrap justify-center max-w-xl">
                {piles.map((pile, index) => (
                    <Pile
                        numObjects={pile}
                        key={index}
                        pileIndex={index}
                        selectedObjectIndex={
                            index === selectedPileIndex ? selectedObjectIndex : null
                        }
                        onSelect={selectObjects}
                        disabled={disabled}
                        highlightPosition={highlightPosition}
                    />
                ))}
            </div>
            <Button
                onClick={() => removeSelectedObjects(selectedPileIndex, selectedObjectIndex)}
                disabled={disabled}
                className="bg-zinc-200 text-zinc-900 hover:bg-zinc-300
        dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600"
            >
                Remove
            </Button>
        </div>
    );
}

export default GameArea;
