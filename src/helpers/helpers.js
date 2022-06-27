export const getValuesCourse = (array, id) => {
    for (const course of array) {
        if (course.id === id) {
            return course;
        };
    }
}