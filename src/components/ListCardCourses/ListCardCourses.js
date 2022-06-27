import { useNavigate } from "react-router-dom";
import { CardCourse } from "../CardCourse/CardCourse";

export const ListCardCourses = ({ courses }) => {
    const navigate = useNavigate();

    return (
        <div className="pt-8">
            <div className="flex">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-500 px-6 py-2 rounded font-semibold hover:bg-gray-400 text-lg mb-5 sm:w-full"
                >Voltar</button>
            </div>

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