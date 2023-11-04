function print(array, number) {
    let result = [];
    let arrLength = array.length;
    for (let i = 0; i < arrLength; i += Number(number)) {
        let current = array[i];
        result.push(current);
    }
    return result;
}

print(['dsa',
'asd', 
'test', 
'tset'], 
2
);