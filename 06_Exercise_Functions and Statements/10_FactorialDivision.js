function calculateAndPrintDivision(num1, num2) {
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    const fact1 = factorial(num1);
    const fact2 = factorial(num2);

    const result = fact1 / fact2;

    console.log(result.toFixed(2));
}

const number1 = 5;
const number2 = 3;

calculateAndPrintDivision(number1, number2);
