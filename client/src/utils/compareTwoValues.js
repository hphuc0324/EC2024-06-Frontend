const compareTwoValues = (obj1, obj2) => {
    if (typeof obj1 === typeof obj2 && typeof obj2 === 'object') {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    } else {
        return obj1 === obj2;
    }
};

export default compareTwoValues;
