import { useState } from "react";
import { CardCourseHome } from "../../components/CardCourseHome/CardCourseHome";


export const Home = ({ courses }) => {
    const [idCourse, setIdCourse] = useState(0);

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
                    <CardCourseHome idCourse={idCourse} courses={courses} />
                </div>
            }
        </main>
    );
}