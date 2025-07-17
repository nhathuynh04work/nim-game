function saveCurrentMatchState({
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
}) {
    const state = {
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
    };

    try {
        localStorage.setItem("savedMatch", JSON.stringify(state));
        console.log("Match state saved successfully.");
    } catch (error) {
        console.error("Failed to save match state:", error);
    }
}

export default saveCurrentMatchState;
