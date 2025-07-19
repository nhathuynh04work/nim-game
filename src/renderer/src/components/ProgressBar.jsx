import { useEffect } from "react";
import { formatTime } from "../helpers/formatTime";

// Handle ticking time
function ProgressBar({ side, isActive, time, setTime, timeLimit, color, paused }) {
    useEffect(() => {
        console.log(time, timeLimit, !isActive, paused);
        if (!isActive || time <= 0 || paused) return;

        const timer = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isActive, time, setTime, paused]);

    const percentRemaining = timeLimit == 99 ? 100 : Math.max((time / timeLimit) * 100, 0);

    const getFillColor = () => {
        if (percentRemaining > 66) {
            return color === "green"
                ? "bg-green-200 dark:bg-green-400/40"
                : "bg-blue-200 dark:bg-blue-400/40";
        }
        if (percentRemaining > 33) {
            return "bg-yellow-100 dark:bg-yellow-300/30";
        }
        return "bg-red-200 dark:bg-red-400/30";
    };

    return (
        <div
            className={`relative overflow-hidden border border-gray-300 dark:border-zinc-600 p-3 min-h-[50px] 
                ${side === "right" ? "border-l-0 text-right" : "border-r-0 text-left"} 
                bg-white dark:bg-zinc-800`}
        >
            {isActive && (
                <>
                    <div
                        className={`absolute top-0 h-full transition-all duration-1000 ${getFillColor()}`}
                        style={{
                            [side === "right" ? "right" : "left"]: 0,
                            width: `${percentRemaining}%`,
                            zIndex: 0
                        }}
                    />

                    <div className="relative z-10 font-mono font-bold text-black dark:text-white">
                        {timeLimit == 99 ? "No limit" : formatTime(time)}
                    </div>
                </>
            )}
        </div>
    );
}

export default ProgressBar;
