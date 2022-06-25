import { useNavigate, useParams } from "react-router-dom";

export const SingnUp = () => {
    const params = useParams();
    const navigate = useNavigate();
    const newPrice = params.price % 1 === 0 ? `${params.price}.00` : `${params.price}`;

    const handleBack = () => {
        navigate(-1);
    }

    const handleSelect = () => {
        navigate("/");
    }

    return (
        <div className="container py-8">
            <label className="flex flex-col mb-5">
                Nome Completo:
                <input
                    type="text"
                    className="border outline-none px-2 py-2 mt-2 rounded"
                    placeholder="Digite seu nome"
                />
            </label>

            <div className="flex md:flex-col">
                <label className="flex flex-col mb-5 flex-1 mr-5 md:mr-0">
                    Email:
                    <input
                        type="email"
                        className="border outline-none px-2 py-2 mt-2 rounded"
                        placeholder="Digite seu email"
                    />
                </label>

                <label className="flex flex-col mb-5 w-72 sm:w-full">
                    Telefone Celular:
                    <input
                        type="tel"
                        className="border outline-none px-2 py-2 mt-2 rounded"
                        placeholder="Digite numero de telefone"
                    />
                </label>
            </div>

            <div className="flex mb-5 md:flex-col">
                <label className="flex flex-col mb-5 flex-1 mr-5 sm:mr-0">
                    Nome do Curso:
                    <input
                        type="text"
                        className="border outline-none px-2 py-2 mt-2 uppercase rounded"
                        value={params.title}
                        disabled
                    />
                </label>

                <label className="flex flex-col mb-5 w-72 sm:w-full">
                    Preco do Curso:
                    <input
                        type="text"
                        className="border outline-none px-2 py-2 mt-2 rounded"
                        value={newPrice}
                        disabled
                    />
                </label>
            </div>

            <div className="flex sm:flex-col">
                <button
                    onClick={handleSelect}
                    className="bg-blue-600 px-6 py-2 outline-none rounded font-semibold hover:bg-blue-500 mr-2 text-lg sm:mr-0 sm:mb-4"
                >Finalizar</button>
                <button
                    onClick={handleBack}
                    className="bg-gray-500 px-6 py-2 rounded font-semibold hover:bg-gray-400 text-lg"
                >Voltar</button>
            </div>

        </div>
    );
}