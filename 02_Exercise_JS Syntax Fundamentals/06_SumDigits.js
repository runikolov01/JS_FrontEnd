function sumDigits(number) {
    let string = number.toString();
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        let currentNum = string[i];
        sum += parseInt(currentNum);
    }
    console.log(sum);
}

