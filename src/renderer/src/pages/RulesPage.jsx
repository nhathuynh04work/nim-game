import Heading from "../components/Heading";
import {
    CubeTransparentIcon,
    ArrowPathIcon,
    FlagIcon,
    LightBulbIcon
} from "@heroicons/react/24/outline";

function RulesPage() {
    return (
        <div className="flex-1 p-12 overflow-auto relative">
            <div className="p-6 text-gray-700 dark:text-gray-300 max-w-3xl space-y-8">
                <Heading className="mb-12">Rules</Heading>

                <p className="text-sm leading-relaxed">
                    <strong>NIM</strong> is a simple yet strategic game played with one or more
                    piles of objects. Players alternate turns removing objects, and the goal is to
                    remove the last one.
                </p>

                <section>
                    <div className="flex items-center gap-3 mb-2">
                        <CubeTransparentIcon className="w-5 h-5 text-indigo-500" />
                        <h2 className="text-base font-semibold text-indigo-700 dark:text-indigo-300">
                            Game Setup
                        </h2>
                    </div>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>There are multiple piles, each containing a number of objects.</li>
                        <li>Two players take turns removing objects.</li>
                        <li>Each turn must remove one or more objects from a single pile.</li>
                    </ul>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-2">
                        <ArrowPathIcon className="w-5 h-5 text-indigo-500" />
                        <h2 className="text-base font-semibold text-indigo-700 dark:text-indigo-300">
                            Turn Rules
                        </h2>
                    </div>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Players alternate turns.</li>
                        <li>A player selects one pile and removes objects.</li>
                        <li>Only one pile can be used per turn.</li>
                    </ul>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-2">
                        <FlagIcon className="w-5 h-5 text-indigo-500" />
                        <h2 className="text-base font-semibold text-indigo-700 dark:text-indigo-300">
                            Winning Condition
                        </h2>
                    </div>
                    <p className="text-sm leading-relaxed">
                        The player who removes the <strong>last object</strong> wins the game. Your
                        goal is to force your opponent into a position where they must leave the
                        final object for you.
                    </p>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-2">
                        <LightBulbIcon className="w-5 h-5 text-indigo-500" />
                        <h2 className="text-base font-semibold text-indigo-700 dark:text-indigo-300">
                            Strategy Tip
                        </h2>
                    </div>
                    <p className="text-sm leading-relaxed">
                        NIM is rooted in binary logic and XOR operations. You can develop a winning
                        strategy by understanding how each move changes the binary structure of the
                        piles.
                    </p>
                </section>
            </div>

            <img src="images/learning.svg" alt="" className="absolute right-14 top-1/3 w-52" />
        </div>
    );
}

export default RulesPage;
