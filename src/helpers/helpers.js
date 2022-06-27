export const getValuesCourse = (array, id) => {
    for (const course of array) {
        if (course.id === id) {
            return course;
        };
    }
}

export const firstCapitalLetter = (value, name) => {
    if (name) {
        const newValue = value.split(' ');
        return newValue[0][0].toUpperCase() + newValue[0].substring(1);
    } else {
        return value[0].toUpperCase() + value.substring(1);
    }

}