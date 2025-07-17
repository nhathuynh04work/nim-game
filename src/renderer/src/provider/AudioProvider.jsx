import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Howl, Howler } from "howler";

const AudioContext = createContext();
export const useAudio = () => useContext(AudioContext);

export function AudioProvider({ children }) {
    const [isMuted, setIsMuted] = useState(() => {
        return JSON.parse(localStorage.getItem("isMuted")) ?? false;
    });

    const currentSound = useRef(null);
    const currentSoundName = useRef(null); // "background", "match", "win"

    const background = useRef(
        new Howl({
            src: ["/sounds/background.mp3"],
            loop: true,
            volume: 0.5
        })
    );

    const match = useRef(
        new Howl({
            src: ["/sounds/match.mp3"],
            loop: true,
            volume: 0.6
        })
    );

    const win = useRef(
        new Howl({
            src: ["/sounds/win.mp3"],
            volume: 1.0
        })
    );

    // Apply mute and store preference
    useEffect(() => {
        Howler.mute(isMuted);
        localStorage.setItem("isMuted", JSON.stringify(isMuted));

        if (!isMuted && currentSound.current && !currentSound.current.playing()) {
            currentSound.current.play();
        }
    }, [isMuted]);

    // Initial background play if nothing is playing
    useEffect(() => {
        if (!isMuted && !background.current.playing()) {
            currentSound.current = background.current;
            currentSoundName.current = "background";
            background.current.play();
        }
    }, []);

    const toggleMute = () => {
        setIsMuted((prev) => !prev);
    };

    const stopAll = () => {
        background.current.stop();
        match.current.stop();
        win.current.stop();
        currentSound.current = null;
        currentSoundName.current = null;
    };

    const play = (soundRef, name) => {
        if (currentSoundName.current === name && soundRef.playing()) return; // already playing

        stopAll();
        currentSound.current = soundRef;
        currentSoundName.current = name;

        if (!isMuted) {
            soundRef.play();
        }
    };

    const playBackground = () => {
        play(background.current, "background");
    };

    const playMatch = () => {
        play(match.current, "match");
    };

    const playWin = () => {
        stopAll();

        currentSound.current = win.current;
        currentSoundName.current = "win";

        // Detach previous listener to prevent duplicates
        win.current.off("end");

        if (!isMuted) {
            win.current.play();
        }
    };

    return (
        <AudioContext.Provider
            value={{
                isMuted,
                toggleMute,
                playBackground,
                playMatch,
                playWin,
                stopAll
            }}
        >
            {children}
        </AudioContext.Provider>
    );
}
