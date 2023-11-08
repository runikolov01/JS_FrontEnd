function calculate(yield) {
    let day = 0;
    let extracted = yield + 10; //111
    let consume = 26;
    let left = 0;
    let total = 0;
    while (yield >= 100) {
        extracted = yield;
        left = extracted - consume; //85
        yield -= 10;
        total += left;
        day++;
    }
    if (total >= 26) {
        total -= 26;
    }
    console.log(day);
    console.log(total);
}

calculate(450);