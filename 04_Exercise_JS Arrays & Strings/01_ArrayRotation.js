function rotation(array, num) {
    num = Number(num);
    for (let i = 0; i < num; i++) {
        let numForMoving = array.shift();
        array.push(numForMoving);
    }
    console.log(array.join(" "));
}

//rotation([51, 47, 32, 61, 21], 2);