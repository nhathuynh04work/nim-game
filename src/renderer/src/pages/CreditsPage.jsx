import Heading from "../components/Heading";

const credits = [
    {
        name: "React",
        logo: "logos/react.svg",
        url: "https://reactjs.org",
        size: "w-24",
        position: "top-[40%] left-[45%]"
    },
    {
        name: "Vite",
        logo: "logos/vite.svg",
        url: "https://vitejs.dev",
        size: "w-20",
        position: "top-[30%] left-[70%]"
    },
    {
        name: "Tailwind CSS",
        logo: "logos/tailwindcss.svg",
        url: "https://tailwindcss.com",
        size: "w-18",
        position: "top-[40%] left-[15%]"
    },
    {
        name: "Electron",
        logo: "logos/electron.svg",
        url: "https://www.electronjs.org/",
        size: "w-16",
        position: "top-[65%] left-[30%]"
    },
    {
        name: "Heroicons",
        logo: "logos/heroicons.svg",
        url: "https://heroicons.com/",
        size: "w-12",
        position: "top-[22%] left-[32%]"
    },
    {
        name: "Kenney Assets",
        logo: "logos/kenney.png",
        url: "https://kenney.nl/assets",
        size: "w-20",
        position: "top-[72%] left-[60%]"
    },
    {
        name: "unDraw",
        logo: "logos/undraw.svg",
        url: "https://undraw.co/",
        size: "w-14",
        position: "top-[10%] left-[52%]"
    },
    {
        name: "Howler",
        logo: "logos/howler.svg",
        url: "https://howlerjs.com/",
        size: "w-14",
        position: "top-[48%] left-[88%]"
    },
    {
        name: "React Router",
        logo: "logos/react-router.svg",
        url: "https://reactrouter.com/",
        size: "w-16",
        position: "top-[68%] left-[8%]"
    },
    {
        name: "React Hot Toast",
        logo: "logos/react-hot-toast.svg",
        url: "https://react-hot-toast.com/",
        size: "w-16",
        position: "top-[78%] left-[82%]"
    },
    {
        name: "Hero Patterns",
        logo: "logos/hero-patterns.svg",
        url: "https://www.heropatterns.com/",
        size: "w-18",
        position: "top-[12%] left-[8%]"
    },
    {
        name: "Figma",
        logo: "logos/figma.svg",
        url: "https://www.figma.com/",
        size: "w-14",
        position: "top-[12%] left-[85%]"
    }
];

export default function CreditsPage() {
    return (
        <div className="flex-1 p-12 overflow-auto">
            <div className="relative flex flex-col items-center p-6">
                <Heading className="text-center mb-12">Credits</Heading>

                <p className="text-zinc-600 dark:text-zinc-300 text-center mx-auto">
                    Huge thanks to these amazing tools and communities that helped bring this game
                    to life.
                </p>
                <div
                    class={`w-full h-[400px] p-4 sm:p-8 relative overflow-hidden rounded-lg bg-gray-950/[2.5%] after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 mt-14`}
                >
                    {credits.map(({ name, logo, url, size, position }) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={name}
                            className={`absolute ${position} ${size} transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]`}
                        >
                            <img
                                src={logo}
                                alt={`${name} logo`}
                                className="object-contain w-full h-full transition duration-300"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
