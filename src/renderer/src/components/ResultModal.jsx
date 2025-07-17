import { useNavigate } from "react-router";
import ButtonGroup from "../layouts/ButtonGroup";
import Button from "./Button";
import Overlay from "./Overlay";

function ResultModal({ winner }) {
    const navigate = useNavigate();

    return (
        <>
            {/* Overlay */}
            <Overlay />

            {/* Modal */}
            <div
                className="flex flex-col fixed z-50 min-w-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-5/6 
                bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 rounded-md shadow-lg"
            >
                {/* Header */}
                <div className="p-4 border-b border-b-gray-300 dark:border-b-zinc-600">
                    <h2 className="font-medium text-2xl">Result 🎉</h2>
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col gap-6">
                    <p>Congratulations to {winner}! You won!</p>

                    <ButtonGroup className="self-end w-full">
                        <Button className="w-1/3" onClick={() => navigate("/")}>
                            Home
                        </Button>
                        <Button
                            className="w-2/3"
                            onClick={() => navigate("/", { state: { showSetupModal: true } })}
                        >
                            New game
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </>
    );
}

export default ResultModal;
