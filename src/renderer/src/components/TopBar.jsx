import ButtonGroup from "../layouts/ButtonGroup";
import DarkModeToggle from "./DarkModeToggle";
import AudioToggle from "./AudioToggle";
import Logo from "./Logo";
import { disabledReason } from "../variables";

function TopBar({ children, onClick, disabled = disabledReason.NONE }) {
    return (
        <div
            className="sticky top-0 z-30 flex justify-between items-center h-16 px-6 
                        bg-zinc-100 dark:bg-zinc-900 
                        text-zinc-900 dark:text-zinc-100 
                        shadow-sm dark:shadow-md"
        >
            <Logo
                disabled={disabled === disabledReason.TIMEOUT ? disabled : disabledReason.NONE}
                onClick={onClick}
            />

            {children}

            <ButtonGroup>
                <AudioToggle />
                <DarkModeToggle />
            </ButtonGroup>
        </div>
    );
}

export default TopBar;
