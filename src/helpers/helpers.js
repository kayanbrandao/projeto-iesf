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

export const orderCourse = (array, order) => {
    if (order === "0") {
        array.sort((item1, item2) => {
            if (item1.title < item2.title) {
                return -1;
            }
            return true;
        });
    }

    if (order === "1") {
        array.sort((item1, item2) => {
            if (item1.title > item2.title) {
                return -1;
            }
            return true;
        });
    }

    if (order === "2") {
        array.sort((item1, item2) => {
            if (item1.price > item2.price) {
                return -1;
            }
            return true;
        });
    }

    if (order === "3") {
        array.sort((item1, item2) => {
            if (item1.price < item2.price) {
                return -1;
            }
            return true;
        });
    }
}   