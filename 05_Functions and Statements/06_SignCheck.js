function signCheck(numOne, numTwo, numThree) {
    const signs = [Math.sign(numOne), Math.sign(numTwo), Math.sign(numThree)];
    const negativeCount = signs.filter(sign => sign === -1).length;
    if (negativeCount % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

signCheck(2, 3, -1); 
signCheck(-2, 3, -1);
