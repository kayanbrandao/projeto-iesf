import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="border-b-2">
            <div className="container flex justify-between items-center py-5 min-h-header sm:flex-col">
                <div className="sm:mb-4">
                    <Link to="/" className="text-4xl uppercase">Logo</Link>
                </div>
                <nav className="sm:w-full">
                    <Link to="/courses" className="rounded bg-green-800 hover:bg-green-600 px-5 py-2 font-semibold text-lg text-white outline-none sm:w-full sm:block sm:text-center">Lista de Cursos</Link>
                </nav>
            </div>
        </header>
    );
}