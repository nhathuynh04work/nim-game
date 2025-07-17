function TimerBar({ time, timeLimit }) {
    const percentage = Math.min((time / timeLimit) * 100, 100);

    return (
        <div className="flex items-center gap-2 h-[42px]">
            <div className="flex-1 flex items-center">
                <div
                    className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-3 overflow-hidden 
                               border border-gray-200 dark:border-zinc-500"
                >
                    <div
                        className="bg-green-400 dark:bg-green-500 h-full transition-all duration-300 ease-linear"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>
            <div className="text-[10px] font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                {time}s / {timeLimit}s
            </div>
        </div>
    );
}

export default TimerBar;
