function printLargestNumber(num1, num2, num3) {
    let biggest = 0;
    if (num1 > num2 && num1 > num3) {
        biggest = num1;
    }
    else if (num2 > num1 && num2 > num3) {
        biggest = num2;
    }
    else if (num3 > num1 && num3 > num2) {
        biggest = num3;
    }

    console.log(`The largest number is ${biggest}.`);
}

