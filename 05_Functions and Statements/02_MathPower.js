function mathPower(num, power) {
    let result = num * num;
    for (let i = 2; i < power; i++) {
        result = (result * num);
    }
    console.log(result);
}

mathPower(2, 3);