import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import GameSetup from "../components/GameSetup";
import ContinuePlaying from "../components/ContinuePlaying";

function GamePage() {
    const [savedMatch, setSavedMatch] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem("savedMatch");
        if (saved) setSavedMatch(JSON.parse(saved));
    }, []);

    return (
        <div>
            <Heading>{savedMatch ? "Continue Playing?" : "New Game"}</Heading>

            {savedMatch ? (
                <ContinuePlaying savedMatch={savedMatch} setSavedMatch={setSavedMatch} />
            ) : (
                <GameSetup />
            )}
        </div>
    );
}

export default GamePage;
