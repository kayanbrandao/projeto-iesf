import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";

ReactModal.setAppElement("#root");

export const ModalForm = ({ setModalIsOpen, modalIsOpen, user }) => {
    const navigate = useNavigate();

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }
    }

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={customStyles}
        >

            <div className="flex items-center justify-end">
                <button
                    onClick={() => setModalIsOpen(false)}
                    className="font-bold text-2xl mb-8"
                >X</button>
            </div>
            <div className="flex flex-col justify-between min-h-modal">
                <div className="">
                    Olá {user.name}, seu email é {user.email} e seu número de telefone é {user.phone}.
                </div>
                <div className="h-12">
                    <button
                        className="bg-green-600 px-6 py-2 outline-none rounded font-semibold hover:bg-green-500 mr-2 text-lg"
                        onClick={() => navigate("/")}
                    >Confirmar</button>
                    <button
                        className="bg-red-400 px-6 py-2 outline-none rounded font-semibold hover:bg-red-300 mr-2 text-lg"
                        onClick={() => setModalIsOpen(false)}
                    >Cancelar</button>
                </div>
            </div>
        </ReactModal>
    );
}