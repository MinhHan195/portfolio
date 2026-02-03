import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../page/homePage/homePage";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/portfolio" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;
