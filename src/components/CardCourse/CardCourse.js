import { useNavigate } from "react-router-dom";

export const CardCourse = ({ course, setOrderId }) => {
    const navigate = useNavigate();

    const selectCourse = () => {
        setOrderId("0");
        navigate(`/singnup/${course.id}`);
    }

    return (
        <div className="border flex justify-center items-center flex-col px-5 py-8 mx-5 mb-10 max-w-xs min-h-2 sm:mr-0 sm:ml-0 sm:min-w-full">
            <span className="uppercase font-bold mb-5 text-xl">{course.title}</span>
            <span className="mb-5 text-center text-sm min-h-1">{course.description}</span>
            <span className="mb-5 text-lg font-semibold">RS {course.price.toFixed(2)}</span>
            <button
                className="uppercase bg-blue-600 outline-none px-6 py-2 rounded font-semibold hover:bg-blue-500 text-lg"
                onClick={selectCourse}
            >selecionar</button>
        </div >
    );
}