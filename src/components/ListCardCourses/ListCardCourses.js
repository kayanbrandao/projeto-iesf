import axios from "axios";
import { useEffect, useState } from "react";
import { CardCourse } from "../CardCourse/CardCourse";

const baseURL = "https://62b4fcb1da3017eabb135218.mockapi.io/courses";

export const ListCardCourses = () => {
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then(res => setCourses(res.data))
    }, []);

    if (!courses) return null;

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-wrap justify-center mb-5">
                {courses.map((course, index) => (
                    <CardCourse key={index} course={course} />
                ))}
            </div>
        </div>
    );
}