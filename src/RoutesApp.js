import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ListCourses } from "./pages/ListCourses/ListCourses";
import { NotFound } from "./pages/NotFound/NotFound";
import { SingnUp } from "./pages/SingnUp/SingnUp";

export const RoutesApp = ({ courses }) => {
    return (
        <Routes>
            <Route path="/" element={<Home courses={courses} />} />
            <Route path="/courses" element={<ListCourses courses={courses} />} />
            <Route path="/singnup/:id" element={<SingnUp courses={courses} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};