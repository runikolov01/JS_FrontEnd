function printAndSum(first, second) {
    let string = "";
    let sum = 0;
    for (let i = first; i <= second; i++) {
        if (i != second) {
            string += `${i} `;
        } else {
            string += `${i}`;
        }

        sum += i;
    }
    console.log(string);
    console.log(`Sum: ${sum}`);
}
