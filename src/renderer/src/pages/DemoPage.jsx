import { useState } from "react";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { PlayIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import DemoArea from "../components/DemoArea";

const steps = [
    {
        instruction:
            "A NIM game screen will consist of these main components: Each player's character and their time bar, the game area contains of piles of objects and a remove button."
    },
    {
        instruction:
            "When it's your turn, you have to select a number of objects from one pile. Clicking on one object will select it and all the objects below it."
    },
    {
        instruction:
            "Select an object from another pile will deselect all the ones you have selected before."
    },
    {
        instruction:
            "After that, click the remove button to remove them. When you're done, the selected objects will be removed and the turn will switch to the other player."
    },
    {
        instruction:
            "There's a time limit on each turn, you can set this time limit before each match. If the time runs out and you haven't remove any object, the system will remove one object from the first pile."
    },
    {
        instruction:
            "The goal is to be the person who removes the last object. Now, remove the last objects to win the game!"
    },
    {
        instruction:
            "Congratulations! You won your NIM game! Good luck on your journey to become the greatest NIM player of all times!"
    }
];

function DemoPage() {
    const [startDemo, setStartDemo] = useState(false);
    const [step, setStep] = useState(0);

    const handleRestart = () => {
        setStep(0);
    };

    const moveNextStep = () => {
        setStep((prev) => prev + 1);
    };

    return (
        <div className="flex-1 p-12 overflow-auto">
            <div className="p-6 flex flex-col">
                {/* Header Row with Heading and Button Group */}
                <div
                    className="w-full transition-all duration-500"
                    style={{
                        marginBottom: startDemo ? "1.5rem" : "3rem"
                    }}
                >
                    <div className="relative flex items-center w-full h-10">
                        {/* Heading */}
                        <Heading
                            className={`transform duration-200
                            ${
                                startDemo
                                    ? "text-left ml-0 translate-x-0"
                                    : "text-center absolute left-1/2 -translate-x-1/2"
                            }
                        `}
                        >
                            Demo
                        </Heading>

                        {/* Button group */}
                        <div
                            className={`
                ml-auto flex gap-4 transition-all duration-700 transform
                ${startDemo ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
            `}
                        >
                            <Button
                                className="flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 hover:shadow-[0_0_12px_rgba(99,102,241,0.5)] dark:border-indigo-400 dark:text-indigo-400 dark:hover:shadow-[0_0_12px_rgba(129,140,248,0.6)] bg-transparent transition-all duration-200"
                                onClick={handleRestart}
                            >
                                <ArrowPathIcon className="w-4 h-4 mr-1" />
                                Restart
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div
                    className={`transition-all duration-500 overflow-hidden ${startDemo ? "h-0" : "mb-14"}`}
                >
                    <p
                        className={`text-zinc-600 dark:text-zinc-300 text-center transition-all duration-500 
                        ${startDemo ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`}
                    >
                        Click the button below to try the demo experience.
                    </p>
                </div>

                {/* Demo Area */}
                <div
                    className={`w-full transition-all duration-500 ease-in-out overflow-hidden  
                    relative bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] 
                    bg-[size:10px_10px] bg-fixed 
                    [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 
                    bg-gray-950/[2.5%] after:pointer-events-none after:absolute after:inset-0 
                     after:inset-ring after:inset-ring-gray-950/5 
                    dark:after:inset-ring-white/10 
                    ${startDemo ? "h-[480px]" : "h-[400px] rounded-lg after:rounded-lg"}`}
                >
                    {!startDemo ? (
                        <div className="absolute inset-0 z-10 pointer-events-auto">
                            <div className="flex items-center justify-center w-full h-full bg-white/10 dark:bg-black/10">
                                <Button
                                    className="flex gap-2 items-center px-4 py-2 rounded-md cursor-pointer 
                                    bg-indigo-600 text-white 
                                    hover:bg-indigo-700 hover:shadow-[0_0_12px_rgba(99,102,241,0.5)] 
                                    dark:bg-indigo-500 dark:hover:bg-indigo-400 
                                    dark:hover:shadow-[0_0_12px_rgba(129,140,248,0.6)] 
                                    transition-all duration-200"
                                    onClick={() => setStartDemo(true)}
                                >
                                    <PlayIcon className="w-5 h-5" />
                                    Start Demo
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <DemoArea step={step} moveNextStep={moveNextStep} />
                    )}
                </div>

                {/* Instruction */}
                <p
                    className={`mt-12 font-mono text-sm text-zinc-700 dark:text-zinc-300 text-center transition-all duration-500 ${startDemo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                    {steps[step].instruction} {/* Add next in step 0 */}
                    {step === 0 && (
                        <span
                            className="underline font-semibold cursor-pointer text-indigo-400 dark:text-indigo-400"
                            onClick={moveNextStep}
                        >
                            Next
                        </span>
                    )}
                    {/* Add "Click highlight in step 1" */}
                    {step === 1 && (
                        <span>
                            Click the{" "}
                            <span className="font-semibold text-emerald-400 dark:text-emerald-300">
                                highlighted
                            </span>{" "}
                            object to select it.
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
}

export default DemoPage;
