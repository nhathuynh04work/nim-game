import { useEffect, useState } from "react";
import { useAudio } from "../provider/AudioProvider";
import Heading from "../components/Heading";

function HomePage() {
    const { playBackground } = useAudio();

    useEffect(() => {
        playBackground();
    }, [playBackground]);

    return (
        <div>
            <Heading>Game that demonstrates the beauty of math</Heading>
        </div>
    );
}

export default HomePage;
