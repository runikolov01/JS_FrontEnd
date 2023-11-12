function oddAndEvenSum(numberInput) {
    let number = numberInput.toString()
    let length = number.length;
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < length; i++) {
        let currentSymbol = number.charAt(i);
        let currentNumber = Number(currentSymbol);
        if (currentNumber % 2 === 0) {
            sumEven += currentNumber;
        } else {
            sumOdd += currentNumber;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

oddAndEvenSum(1000435);