import { HashRouter, Route, Routes } from "react-router";
import { DarkModeProvider } from "./provider/DarkModeProvider";
import TopMainLayout from "./layouts/TopMainLayout";
import DynamicTitle from "./components/DynamicTitle";
import { AudioProvider } from "./provider/AudioProvider";
import DocumentationPage from "./pages/DocumentationPage";
import CreditsPage from "./pages/CreditsPage";
import AuthorPage from "./pages/AuthorPage";
import RulesPage from "./pages/RulesPage";
import DemoPage from "./pages/DemoPage";
import SidebarMainLayout from "./layouts/SidebarMainLayout";
import DocumentationInfoPage from "./pages/DocumentationInfoPage";
import MatchPage from "./pages/MatchPage";
import GamePage from "./pages/GamePage";
import StatisticsPage from "./pages/StatisticsPage";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import MathematicsPage from "./pages/MathematicsPage";

function App() {
    return (
        <DarkModeProvider>
            <AudioProvider>
                <HashRouter>
                    <DynamicTitle />
                    <Routes>
                        <Route element={<TopMainLayout />}>
                            <Route element={<SidebarMainLayout />}>
                                <Route index element={<HomePage />} />
                                <Route path="documentation" element={<DocumentationPage />}>
                                    <Route index element={<DocumentationInfoPage />} />
                                    <Route path="history" element={<HistoryPage />} />
                                    <Route path="rules" element={<RulesPage />} />
                                    <Route path="mathematics" element={<MathematicsPage />} />
                                    <Route path="demo" element={<DemoPage />} />
                                    <Route path="credits" element={<CreditsPage />} />
                                    <Route path="author" element={<AuthorPage />} />
                                </Route>
                                <Route path="statistics" element={<StatisticsPage />} />
                                <Route path="game" element={<GamePage />} />
                            </Route>
                        </Route>

                        <Route path="match" element={<MatchPage />} />
                    </Routes>
                </HashRouter>
            </AudioProvider>
        </DarkModeProvider>
    );
}

export default App;
