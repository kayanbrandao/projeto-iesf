import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://62b4fcb1da3017eabb135218.mockapi.io/courses";

export const Home = () => {

    const [courses, setCourses] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then(res => setCourses(res.data))
    }, []);

    if (!courses) return null;

    return (
        <div className="container flex justify-center items-center min-h-home">
            <span>Selecione o Curso:</span>
            <select className="outline-none w-28">
                {courses.map((course, index) => (
                    <option
                        value={course.title.toLowerCase()}
                        key={index}
                        className=""
                    >{course.title}</option>
                ))}
            </select>
        </div>
    );
}