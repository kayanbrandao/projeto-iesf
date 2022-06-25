import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardCourse } from "../CardCourse/CardCourse";

const baseURL = "https://62b4fcb1da3017eabb135218.mockapi.io/courses";

export const ListCardCourses = () => {
    const navigate = useNavigate();

    const [courses, setCourses] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then(res => setCourses(res.data))
    }, []);

    if (!courses) return null;

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className="pt-8">
            <button
                onClick={handleBack}
                className="bg-gray-500 px-6 py-2 rounded font-semibold hover:bg-gray-400 text-lg mb-5 sm:w-full"
            >Voltar</button>

            <div className="flex justify-center items-center sm:w-full">
                <div className="flex flex-wrap justify-center mb-5 sm:w-full">
                    {courses.map((course, index) => (
                        <CardCourse key={index} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}