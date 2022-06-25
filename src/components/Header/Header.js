import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="border-b-2 ">
            <div className="container flex justify-between items-center py-5 min-h-header">
                <div>
                    <Link to="/" className="text-4xl">Logo</Link>
                </div>
                <nav>
                    <Link to="/courses" className="rounded bg-green-800 hover:bg-green-600 px-5 py-2 font-semibold text-lg text-white outline-none">Lista de Cursos</Link>
                </nav>
            </div>
        </header>
    );
}