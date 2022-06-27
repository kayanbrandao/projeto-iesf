import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CardCourse } from "../CardCourse/CardCourse";

import { orderCourse } from "../../helpers/helpers"

export const ListCardCourses = ({ courses }) => {
    const navigate = useNavigate();

    const [orderId, setOrderId] = useState(0);

    orderCourse(courses, orderId);

    const selectBack = () => {
        setOrderId("0");
        navigate(-1);
    }

    return (
        <div className="pt-8">
            <div className="flex items-center justify-between sm:flex-col">
                <button
                    onClick={selectBack}
                    className="bg-gray-500 px-6 py-2 h-10 rounded font-semibold hover:bg-gray-400 text-lg mb-5 sm:w-full outline-none"
                >Voltar</button>
                <div>
                    <select
                        className="outline-none border rounded py-2 h-10 w-36 sm:w-full"
                        value={orderId}
                        onChange={e => setOrderId(e.target.value)}
                    >
                        <option value="0">A - Z</option>
                        <option value="1">Z - A</option>
                        <option value="2">Maior preço</option>
                        <option value="3">Menor preço</option>
                    </select>
                </div>
            </div>

            <div className="flex justify-center items-center sm:w-full">
                <div className="flex flex-wrap justify-center mb-5 sm:w-full">
                    {courses.map((course, index) => (
                        <CardCourse key={index} course={course} setOrderId={setOrderId} />
                    ))}
                </div>
            </div>
        </div>
    );
}