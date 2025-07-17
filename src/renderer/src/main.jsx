import "./assets/main.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/HomePage";
import Statistics from "./pages/StatisticsPage";
import { DarkModeProvider } from "./provider/DarkModeProvider";
import TopMainLayout from "./layouts/TopMainLayout";
import DynamicTitle from "./components/DynamicTitle";
import { AudioProvider } from "./provider/AudioProvider";
import DocumentationPage from "./pages/DocumentationPage";
import OverviewPage from "./pages/OverviewPage";
import CreditsPage from "./pages/CreditsPage";
import AuthorPage from "./pages/AuthorPage";
import RulesPage from "./pages/RulesPage";
import DemoPage from "./pages/DemoPage";
import FaqsPage from "./pages/FaqsPage";
import SidebarMainLayout from "./layouts/SidebarMainLayout";
import DocumentationInfoPage from "./pages/DocumentationInfoPage";
import MatchPage from "./pages/MatchPage";
import GamePage from "./pages/GamePage";
import StatisticsPage from "./pages/StatisticsPage";
import HomePage from "./pages/HomePage";

createRoot(document.getElementById("root")).render(
    <DarkModeProvider>
        <AudioProvider>
            <BrowserRouter>
                <DynamicTitle />
                <Routes>
                    <Route element={<TopMainLayout />}>
                        <Route element={<SidebarMainLayout />}>
                            <Route index element={<HomePage />} />
                            <Route path="documentation" element={<DocumentationPage />}>
                                <Route index element={<DocumentationInfoPage />} />
                                <Route path="overview" element={<OverviewPage />} />
                                <Route path="rules" element={<RulesPage />} />
                                <Route path="demo" element={<DemoPage />} />
                                <Route path="faqs" element={<FaqsPage />} />
                                <Route path="credits" element={<CreditsPage />} />
                                <Route path="author" element={<AuthorPage />} />
                            </Route>
                            <Route path="statistics" element={<StatisticsPage />} />
                            <Route path="game" element={<GamePage />} />
                        </Route>
                    </Route>

                    <Route path="match" element={<MatchPage />} />
                </Routes>
            </BrowserRouter>
        </AudioProvider>
    </DarkModeProvider>
);
