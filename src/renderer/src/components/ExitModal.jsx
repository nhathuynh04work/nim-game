import { useNavigate } from "react-router";
import ButtonGroup from "../layouts/ButtonGroup";
import Button from "./Button";
import Overlay from "./Overlay";

function ExitModal({ onClose, onSaveAndExit }) {
    const navigate = useNavigate();

    return (
        <>
            {/* Overlay */}
            <Overlay onClick={onClose} />

            {/* Modal */}
            <div
                className="flex flex-col fixed z-50 min-w-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-5/6 
                bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 rounded-md shadow-lg"
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-b-gray-300 dark:border-b-zinc-600">
                    <h2 className="font-medium text-2xl">Exit game?</h2>
                    <Button type="x" onClick={onClose} />
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col gap-8">
                    <p>Do you want to save the game before exiting?</p>

                    <ButtonGroup className="self-end w-full">
                        {/* Discard Button */}
                        <Button
                            className="
            w-1/3 py-2
            border border-indigo-600 text-indigo-600
            hover:shadow-[0_0_12px_rgba(99,102,241,0.4)]
            dark:border-indigo-400 dark:text-indigo-400
            dark:hover:shadow-[0_0_12px_rgba(129,140,248,0.5)]
            transition-all duration-200
        "
                            onClick={() => {
                                navigate("/");
                                localStorage.removeItem("savedMatch");
                            }}
                        >
                            Discard
                        </Button>

                        {/* Save and Exit Button */}
                        <Button
                            className="
            w-2/3 py-2
            bg-indigo-600 text-white 
            hover:bg-indigo-700
            hover:shadow-[0_0_12px_rgba(99,102,241,0.5)]
            dark:bg-indigo-500 
            dark:hover:bg-indigo-400 
            dark:hover:shadow-[0_0_12px_rgba(129,140,248,0.6)]
            transition-all duration-200
        "
                            onClick={onSaveAndExit}
                        >
                            Save and Exit
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </>
    );
}

export default ExitModal;
