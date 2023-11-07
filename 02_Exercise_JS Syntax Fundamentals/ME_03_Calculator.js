function calculate(firstNum, sign, secondNum) {
    let result = 0.00;
    switch (sign) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
    }
    console.log(result.toFixed(2));
}


calculate(5,
    '+',
    10
);