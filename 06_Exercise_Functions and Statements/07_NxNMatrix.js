function matrix(number) {
    // let text = `${number} `;
    // for (let i = 0; i < number; i++) {
    //     console.log(text.repeat(number));
    // }

    function printRow(num){
        return (num.toString() + " ").repeat(num);;
    }

    for(let currentRow = 1; currentRow <= number; currentRow++){
        console.log(printRow(number));
    }
}

matrix(3);