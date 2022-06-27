export const getValuesCourse = (array, id) => {
    for (const course of array) {
        if (course.id === id) {
            return course;
        };
    }
}

export const firstCapitalLetter = (value, name) => {
    if (name) {
        let newValue = value.split(' ');
        newValue = newValue[0];
        console.log(newValue[0].toUpperCase() + value.substring(1));
        return
    } else {
        return value[0].toUpperCase() + value.substring(1);
    }

}