import { useEffect } from "react";
import { useLocation } from "react-router";

export default function DynamicTitle() {
    const location = useLocation();

    useEffect(() => {
        const titles = {
            "/": "Home",
            "/game": "Play Game",
            "/guidelines": "Guidelines",
            "/statistics": "Statistics"
        };

        document.title = titles[location.pathname] || "My App";
    }, [location.pathname]);

    return null;
}
