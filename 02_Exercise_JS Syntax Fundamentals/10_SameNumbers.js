function sameNumbers(number) {
    let text = number.toString();
    let bool = true;
    let result = 0;
    let currentNum = 0;
    for (let i = 1; i < text.length; i++) {
        currentNum = parseInt(text[i]);

        let previousNum = parseInt(text[i - 1]);
        if (currentNum != previousNum) {
            bool = false;
        }
        if (i == 1) {
            currentNum += parseInt(text[0]);
        }
        result += currentNum;
    }
    console.log(bool);
    console.log(result);
}

sameNumbers(2222222);