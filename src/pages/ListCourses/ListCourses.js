import { ListCardCourses } from "../../components/ListCardCourses/ListCardCourses";

export const ListCourses = ({ courses }) => {
    return (
        <div className="container">
            <ListCardCourses courses={courses} />
        </div>
    );
}