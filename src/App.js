
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { RoutesApp } from "./RoutesApp";

export default function App() {
	return (
		<div className="global">
			<Header />
			<RoutesApp />
			<Footer />
		</div>
	);
}