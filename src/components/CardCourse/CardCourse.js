import { useNavigate } from "react-router-dom";

export const CardCourse = ({ course }) => {
    const navigate = useNavigate();
    const newPrice = course.price % 1 === 0 ? `R$ ${course.price}.00` : `R$ ${course.price}`;

    const title = course.title;
    const price = course.price;

    const handleCard = () => {
        navigate(`/singnup/${title}/${price}`);
    }

    return (
        <div className="border flex justify-center items-center flex-col px-5 py-8 m-6 max-w-xs min-h-2">
            <span className="uppercase font-bold mb-5 text-xl">{course.title}</span>
            <span className="mb-5 text-center text-sm min-h-1">{course.description}</span>
            <span className="mb-5 text-lg font-semibold">{newPrice}</span>
            <button
                className="uppercase bg-blue-600 outline-none px-6 py-2 rounded font-semibold hover:bg-blue-500 text-lg"
                onClick={handleCard}
            >selecionar</button>
        </div >
    );
}