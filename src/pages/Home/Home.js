import axios from "axios";
import { useEffect, useState } from "react";
import { CardCourseHome } from "../../components/CardCourseHome/CardCourseHome";

const baseURL = "https://62b4fcb1da3017eabb135218.mockapi.io/courses";

export const Home = () => {

    const [courses, setCourses] = useState(null);
    const [idCourse, setIdCourse] = useState(0);

    useEffect(() => {
        axios.get(baseURL).then(res => setCourses(res.data))
    }, []);

    if (!courses) return null;

    const getValuesCourse = () => {
        for (const course of courses) {
            if (course.id === idCourse) {
                return course;
            };
        }
    }


    return (
        <main className="container pt-8 min-h-home">
            <div className="flex items-center justify-center mb-8">
                <select
                    className="outline-none w-28 uppercase border rounded min-w-select h-10 md:w-full"
                    id="idCourses" value={idCourse}
                    onChange={e => setIdCourse(e.target.value)}
                >
                    <option value="0">SELECIONE</option>
                    {courses.map((course, index) => (
                        <option
                            value={course.id}
                            key={index}
                            className="uppercase"
                        >{course.title}</option>
                    ))}
                </select>
            </div>

            {idCourse > 0 &&
                <div>
                    <CardCourseHome getValuesCourse={getValuesCourse} idCourse={idCourse} />
                </div>
            }
        </main>
    );
}