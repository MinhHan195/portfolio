import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../page/homePage/HomePage";
import WeSphere from "../page/ProjectDetail/WeSphere/WeSphere";
import WorkFind from "../page/ProjectDetail/WorkFind/WorkFind";
import Voyage from "../page/ProjectDetail/Voyage/Voyage";
function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/portfolio" element={<HomePage />} />
            </Routes>
            <Routes>
                <Route
                    path="/portfolio/project/WeSphere"
                    element={<WeSphere />}
                />
            </Routes>
            <Routes>
                <Route
                    path="/portfolio/project/WorkFind"
                    element={<WorkFind />}
                />
            </Routes>
            <Routes>
                <Route path="/portfolio/project/Voyage" element={<Voyage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;
