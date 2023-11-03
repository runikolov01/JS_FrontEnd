function subtract(arr) {
    let oddNums = 0;
    let evenNums = 0;

    for (let i = 0; i < arr.length; i++) {
        let curNumber = arr[i];
        if (curNumber % 2 == 0) {
            evenNums += curNumber;
        } else {
            oddNums += curNumber;
        }
    }
    let diff = evenNums - oddNums;
    console.log(diff);
}

//subtract([2,4,6,8,10]);