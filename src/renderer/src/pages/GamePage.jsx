import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import GameSetup from "../components/GameSetup";
import ContinuePlaying from "../components/ContinuePlaying";
import Button from "../components/Button";
import { DocumentTextIcon } from "@heroicons/react/16/solid";

function GamePage() {
    const [savedMatch, setSavedMatch] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem("savedMatch");
        if (saved) setSavedMatch(JSON.parse(saved));
    }, []);

    return (
        <div className="flex-1 p-12 overflow-auto">
            <div className="p-6">
                <Heading>{savedMatch ? "Continue Playing?" : "New Game"}</Heading>

                {savedMatch ? (
                    <ContinuePlaying savedMatch={savedMatch} setSavedMatch={setSavedMatch} />
                ) : (
                    <GameSetup />
                )}
            </div>
        </div>
    );
}

export default GamePage;
