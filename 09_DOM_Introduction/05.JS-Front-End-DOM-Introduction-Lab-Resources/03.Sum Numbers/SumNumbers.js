function calc() {
    const firstNumberElementRef = document.getElementById('num1');
    const firstNumberValue = firstNumberElementRef.value;
    const firstNumberAsNum = Number(firstNumberValue);

    const secondNum = Number(document.getElementById('num2').value);

    const finalSum = firstNumberAsNum + secondNum;

    document.getElementById('sum').value = finalSum;
}
