function sortingNumbers(array) {
    let result = [];
    while (array.length > 0) {
        let smallestNum = Math.min(...array);
        result.push(smallestNum);
        array.splice(array.indexOf(smallestNum), 1);
        if (array.length > 0) {
            let biggestNum = Math.max(...array);
            result.push(biggestNum);
            array.splice(array.indexOf(biggestNum), 1);
        }
    }
    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);