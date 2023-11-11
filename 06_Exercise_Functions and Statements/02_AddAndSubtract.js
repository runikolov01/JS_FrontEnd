function addAndSubtract(first, second, third) {
    let sumNumber = sum(first, second);
    let subtractNumber = subtract(sumNumber, third);
    console.log(subtractNumber);
}

function sum(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}

addAndSubtract(23, 6, 10);