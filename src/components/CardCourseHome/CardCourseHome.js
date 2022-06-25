import { useNavigate } from "react-router-dom";

export const CardCourseHome = ({ getValuesCourse, idCourse }) => {
    const card = getValuesCourse(idCourse);

    const navigate = useNavigate();

    const handleCard = () => {
        navigate(`/singnup/${card.title}/${card.price}`);
    }

    return (
        <div className="flex flex-col border rounded px-5 py-8 justify-center items-center mb-8">
            <span className="uppercase font-bold text-3xl mb-8">{card.title}</span>
            <span className="text-center text-xl mb-8 ">{card.description}</span>
            <span className="font-semibold text-2xl mb-8" >RS {card.price.toFixed(2)}</span>
            <button
                className="uppercase bg-blue-600 outline-none px-6 py-2 rounded font-semibold hover:bg-blue-500 text-lg"
                onClick={handleCard}
            >selecionar</button>
        </div>
    );
}