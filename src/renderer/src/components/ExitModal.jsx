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
                        <Button
                            className="w-1/3 py-3 
                   border border-zinc-400 text-zinc-700 
                   bg-transparent 
                   hover:border-red-700 hover:bg-red-700 hover:text-white 
                   dark:border-zinc-600 dark:text-zinc-200 
                   dark:hover:bg-red-700 dark:hover:text-white 
                   transition-colors duration-200"
                            onClick={() => {
                                navigate("/");
                                localStorage.removeItem("savedMatch");
                            }}
                        >
                            Discard
                        </Button>
                        <Button
                            className="w-2/3 py-3 
                   border border-zinc-400 text-zinc-700 
                   bg-transparent 
                   hover:border-green-700 hover:bg-green-700 hover:text-white 
                   dark:border-zinc-600 dark:text-zinc-200 
                   dark:hover:bg-green-700 dark:hover:text-white 
                   transition-colors duration-200"
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
