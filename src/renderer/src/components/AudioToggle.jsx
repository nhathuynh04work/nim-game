import { useAudio } from "../provider/AudioProvider";

function AudioToggle() {
    const { isMuted, toggleMute } = useAudio();

    return (
        <button
            onClick={toggleMute}
            className="hover:bg-[#23272f0d] dark:hover:bg-[#f6f7f90d] cursor-pointer rounded-full w-12 h-12 flex items-center justify-center 
             text-gray-700 dark:text-gray-200 transition-colors duration-200"
        >
            {isMuted ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-volume-up"
                    viewBox="0 0 16 16"
                >
                    <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
                    <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
                    <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-volume-mute"
                    viewBox="0 0 16 16"
                >
                    <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0" />
                </svg>
            )}
        </button>
    );
}

export default AudioToggle;
