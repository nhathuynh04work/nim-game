function saveCurrentMatchState(state) {
    try {
        localStorage.setItem("savedMatch", JSON.stringify(state));
        console.log("Match state saved successfully.");
    } catch (error) {
        console.error("Failed to save match state:", error);
    }
}

export default saveCurrentMatchState;
