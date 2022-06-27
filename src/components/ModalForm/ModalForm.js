import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export const ModalForm = ({ setModalIsOpen, modalIsOpen }) => {

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
        </ReactModal>
    );
}