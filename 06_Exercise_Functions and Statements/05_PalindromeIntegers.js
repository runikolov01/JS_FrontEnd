function checkIfNumberIsPalindrom(array) {
    function isPalindrome(num) {
        let numAsString = num.toString();
        let reversedNum = numAsString.split('').reverse().join('');
        return numAsString == reversedNum;
    }

    for (const currentNumber of array) {
        console.log(isPalindrome(currentNumber));
    }
}

checkIfNumberIsPalindrom([32, 2, 232, 1010]);