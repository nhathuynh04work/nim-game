import Heading from "../components/Heading";

export default function AuthorPage() {
    return (
        <div className="flex-1 p-12 overflow-auto">
            <div className="max-w-5xl mx-auto p-6">
                <Heading className="text-center mb-12">Author</Heading>

                <div
                    className="relative overflow-hidden rounded-lg bg-gray-950/[2.5%] dark:bg-zinc-900 after:pointer-events-none after:absolute after:inset-0 after:rounded-lg 
                after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 
                bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] 
                bg-[size:10px_10px] bg-fixed 
                [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 
                p-6 sm:p-10 shadow-lg"
                >
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        {/* Author Image */}
                        <div className="flex-shrink-0 w-full md:w-1/3">
                            <img
                                src="author.png"
                                alt="Author"
                                className="rounded-lg object-cover w-full h-auto shadow-md"
                            />
                        </div>

                        {/* Info + Form */}
                        <div className="flex-1 w-full">
                            {/* Personal Info */}
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                                    Huỳnh Nguyễn Anh Nhật
                                </h2>
                                <p className="text-zinc-600 dark:text-zinc-300 mt-2 font-extralight">
                                    Based in Vietnam. Currently a student at{" "}
                                    <a
                                        href="https://www.ctu.edu.vn"
                                        className="font-bold dark:text-indigo-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Can Tho University
                                    </a>
                                    , majoring in Software Engineering.
                                </p>
                            </div>

                            {/* Email Form */}
                            <form
                                action="mailto:nhathuynh04work@gmail.com"
                                method="POST"
                                encType="text/plain"
                                className="space-y-4"
                            >
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-2 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        required
                                        className="w-full px-4 py-2 resize-none rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                                    {/* Send button */}
                                    <button
                                        type="submit"
                                        className="px-6 py-2 rounded-md cursor-pointer bg-indigo-600 text-white 
                                                hover:bg-indigo-700 
                                                hover:shadow-[0_0_12px_rgba(99,102,241,0.5)]
                                                dark:bg-indigo-500 
                                                dark:hover:bg-indigo-400 
                                                dark:hover:shadow-[0_0_12px_rgba(129,140,248,0.6)]
                                                transition-all duration-200"
                                    >
                                        Send
                                    </button>

                                    {/* GitHub & LinkedIn buttons */}
                                    <div className="flex justify-between gap-4 w-full sm:w-auto">
                                        <a
                                            href="https://github.com/nhathuynh04work"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-zinc-800 dark:text-zinc-100 opacity-40 transition cursor-pointer hover:opacity-70"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                fill="currentColor"
                                                class="bi bi-github"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/nh%E1%BA%ADt-hu%E1%BB%B3nh-409676356/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-zinc-800 dark:text-zinc-100 opacity-40 transition cursor-pointer hover:opacity-70"
                                        >
                                            <svg
                                                height="32"
                                                width="32"
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 382 382"
                                                xml:space="preserve"
                                                fill="currentColor"
                                            >
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g
                                                    id="SVGRepo_tracerCarrier"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    {" "}
                                                    <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"></path>{" "}
                                                </g>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
