import { Link, useParams } from "react-router-dom";

export const SingnUp = () => {
    const params = useParams();
    const newPrice = params.price % 1 === 0 ? `${params.price}.00` : `${params.price}`;

    return (
        <div>
            <label className="flex flex-col mb-5">
                Nome Completo:
                <input
                    type="text"
                    className="border outline-none px-2 py-2 mt-2"
                    placeholder="Digite seu nome"
                />
            </label>

            <div className="flex">
                <label className="flex flex-col mb-5 flex-1 mr-5">
                    Email:
                    <input
                        type="email"
                        className="border outline-none px-2 py-2 mt-2"
                        placeholder="Digite seu email"
                    />
                </label>

                <label className="flex flex-col mb-5 w-72">
                    Telefone Celular:
                    <input
                        type="tel"
                        className="border outline-none px-2 py-2 mt-2"
                        placeholder="Digite numero de telefone"
                    />
                </label>
            </div>

            <div className="flex mb-5">
                <label className="flex flex-col mb-5 flex-1 mr-5">
                    Nome do Curso:
                    <input
                        type="text"
                        className="border outline-none px-2 py-2 mt-2 uppercase"
                        value={params.title}
                        disabled
                    />
                </label>

                <label className="flex flex-col mb-5 w-72">
                    Preco do Curso:
                    <input
                        type="text"
                        className="border outline-none px-2 py-2 mt-2"
                        value={newPrice}
                        disabled
                    />
                </label>
            </div>



            <Link to="/" className="bg-green-400 px-6 py-2 rounded font-semibold hover:bg-green-500 mr-2 text-lg">Finalizar</Link>
            <Link to="/" className="bg-blue-400 px-6 py-2 rounded font-semibold hover:bg-blue-500 text-lg">Voltar</Link>
        </div>
    );
}