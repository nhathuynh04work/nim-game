import { useEffect } from "react";
import { useLocation } from "react-router";

export default function DynamicTitle() {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;

        const titles = {
            "/": "Home",
            "/game": "Play Game",
            "/match":
                location.state?.mode === "vsComputer" ? "Play with Computer" : "Play with Player",
            "/statistics": "Statistics",
            "/documentation": "Documentation",
            "/documentation/overview": "Overview",
            "/documentation/rules": "Rules",
            "/documentation/demo": "Demo",
            "/documentation/faqs": "FAQs",
            "/documentation/credits": "Credits",
            "/documentation/author": "About the Author"
        };

        const baseTitle = "NIM Game";
        const pageTitle = titles[path] ? `${titles[path]} | ${baseTitle}` : baseTitle;

        document.title = pageTitle;
    }, [location.pathname]);

    return null;
}
