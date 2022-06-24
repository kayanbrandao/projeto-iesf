import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { SingnUp } from "./pages/SingnUp/SingnUp";

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/singnup/:title/:price" element={<SingnUp />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};