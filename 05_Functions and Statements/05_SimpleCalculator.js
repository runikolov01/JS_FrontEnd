function calculate(a, b, operator) {
    const operations = {
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
    };

    const operatorFunction = operations[operator];
    const result = operatorFunction(a, b);
    console.log(result);
}

calculate(5, 5, "multiply");