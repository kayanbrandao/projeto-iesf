import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import { firstCapitalLetter } from "../../helpers/helpers";
import { customStyles, defaultCustomStyles } from "./styles";

ReactModal.setAppElement("#root");

export const ModalForm = ({ setModalisOpen, modalIsOpen, user, course, send }) => {
    const navigate = useNavigate();
    let name = "";
    let title = "";

    const widthWindown = window.innerWidth;

    if (send) {
        name = firstCapitalLetter(user.name, true);
        title = firstCapitalLetter(course.title, false);
    }

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalisOpen(false)}
            style={(widthWindown > 1024) ? customStyles : defaultCustomStyles}
        >

            <div className="flex items-center justify-end">
                <button
                    onClick={() => setModalisOpen(false)}
                    className="font-bold text-2xl mb-8 w"
                >X</button>
            </div>
            <div className="flex flex-col justify-between min-h-modal">
                <div className="flex flex-col">
                    <span className="mb-4 text-xl">Obrigado(a) <strong>{name}</strong>, por dar preferência em nossa plataforma para escolher o curso desejado.</span>
                    <div className="flex flex-col">
                        <span className="mb-2 text-lg">Curso: <strong>{title}</strong></span>
                        <span className="mb-2 text-lg">Valor: <strong>R$ {course.price}</strong></span>
                    </div>
                </div>
                <div className="h-12">
                    <button
                        className="bg-green-600 px-6 py-2 outline-none rounded font-semibold hover:bg-green-500 mr-2 text-lg"
                        onClick={() => navigate("/")}
                    >Confirmar</button>
                    <button
                        className="bg-red-400 px-6 py-2 outline-none rounded font-semibold hover:bg-red-300 mr-2 text-lg"
                        onClick={() => setModalisOpen(false)}
                    >Cancelar</button>
                </div>
            </div>
        </ReactModal>
    );
}