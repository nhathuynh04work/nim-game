function TimerBar({ time, timeLimit }) {
    const percentage = timeLimit == 99 ? 100 : Math.min((time / timeLimit) * 100, 100);

    return (
        <div className="flex items-center gap-2 h-[42px]">
            <div className="flex-1 flex items-center">
                <div
                    className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-3 overflow-hidden 
                               border border-gray-300 dark:border-zinc-600"
                >
                    <div
                        className="bg-indigo-500 dark:bg-indigo-400 h-full transition-all duration-300 ease-linear 
                                   shadow-[0_0_8px_rgba(99,102,241,0.4)] dark:shadow-[0_0_8px_rgba(129,140,248,0.5)]"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>
            <div className="text-[10px] font-medium text-gray-700 dark:text-zinc-200 whitespace-nowrap">
                {timeLimit == 99 ? "No limit" : `${time}s / ${timeLimit}s`}
            </div>
        </div>
    );
}

export default TimerBar;
