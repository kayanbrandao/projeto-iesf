
import axios from "axios";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { RoutesApp } from "./RoutesApp";

const baseURL = "https://62b4fcb1da3017eabb135218.mockapi.io/courses";

export default function App() {

	const [courses, setCourses] = useState(null);

	useEffect(() => {
		axios.get(baseURL).then(res => setCourses(res.data))
	}, []);

	if (!courses) return null;

	return (
		<div className="global text-center">
			<Header />
			<RoutesApp courses={courses} />
			<Footer />
		</div>
	);
}