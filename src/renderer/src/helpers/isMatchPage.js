import { useLocation } from "react-router";

export default function isMatchPage() {
    const location = useLocation();
    return location.pathname === "/match";
}
