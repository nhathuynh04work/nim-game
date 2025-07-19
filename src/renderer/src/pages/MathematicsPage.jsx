import Heading from "../components/Heading";

function MathematicsPage() {
    return (
        <div className="flex-1 p-12 overflow-auto">
            <div className="p-6 text-gray-700 dark:text-gray-300 max-w-3xl space-y-8">
                <Heading className="mb-12">Mathematics of NIM</Heading>

                <section>
                    <h2 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                        1. The NIM-Sum
                    </h2>
                    <p className="text-sm leading-relaxed">
                        At the heart of NIM is the <strong>NIM-sum</strong>, calculated using the
                        bitwise XOR (exclusive OR) of the number of sticks in each row.
                    </p>
                    <blockquote className="border-l-4 pl-4 italic text-sm text-indigo-600 dark:text-indigo-300 mt-2">
                        If the NIM-sum = 0, the position is losing. Otherwise, it's a winning
                        position.
                    </blockquote>
                    <p className="text-sm mt-2">
                        For example, if the rows contain <code>3</code>, <code>4</code>, and{" "}
                        <code>5</code> sticks:
                    </p>
                    <ul className="list-disc pl-6 text-sm space-y-1 text-gray-600 dark:text-gray-400">
                        <li>
                            Binary of 3 = <code>011</code>
                        </li>
                        <li>
                            Binary of 4 = <code>100</code>
                        </li>
                        <li>
                            Binary of 5 = <code>101</code>
                        </li>
                    </ul>
                    <p className="mt-2 text-sm">
                        XOR all: <code>011 ⊕ 100 ⊕ 101 = 010 (2)</code> → So this is a{" "}
                        <strong>winning</strong> position.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                        2. Winning Strategy
                    </h2>
                    <p className="text-sm leading-relaxed">
                        To win, you must always move in a way that sets the NIM-sum to zero. This
                        often involves choosing a row and reducing its stick count so that the new
                        NIM-sum is exactly zero.
                    </p>
                    <p className="text-sm mt-2">Mathematically, you're solving for:</p>
                    <pre className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-md text-xs overflow-x-auto mt-2">
                        {`let x = current_row_value
let totalXOR = xor(all rows)
new_value = x ^ totalXOR
remove (x - new_value) sticks from that row
`}
                    </pre>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                        3. Why XOR?
                    </h2>
                    <p className="text-sm leading-relaxed">
                        XOR (exclusive OR) has the unique property where:
                    </p>
                    <ul className="list-disc pl-6 text-sm space-y-1 text-gray-600 dark:text-gray-400">
                        <li>
                            <code>a ⊕ a = 0</code>
                        </li>
                        <li>
                            <code>a ⊕ 0 = a</code>
                        </li>
                        <li>It is associative and commutative</li>
                    </ul>
                    <p className="text-sm mt-2">
                        These properties make XOR ideal for evaluating "neutral" versus
                        "advantageous" game states.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                        4. Implications
                    </h2>
                    <p className="text-sm leading-relaxed">
                        The mathematics of NIM has been foundational in the field of
                        <strong> combinatorial game theory</strong>. It even plays a role in more
                        advanced concepts such as:
                    </p>
                    <ul className="list-disc pl-6 text-sm space-y-1 text-gray-600 dark:text-gray-400 mt-2">
                        <li>Grundy numbers and Sprague-Grundy theorem</li>
                        <li>Error-correcting codes</li>
                        <li>Algorithms in artificial intelligence</li>
                    </ul>
                </section>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
                    Mastering NIM is less about luck and more about understanding binary logic. The
                    simplicity of the rules hides a deep and beautiful mathematical structure.
                </p>

                <p className="text-sm mt-4">
                    Learn more on{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Nim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800 dark:hover:text-indigo-300 transition"
                    >
                        Wikipedia: NIM (Game)
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}

export default MathematicsPage;
