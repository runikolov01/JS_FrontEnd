function loadingBar(number) {
    let result = "[..........]".split('');
    let percNumber = number / 10;
    result.splice(1, percNumber, "%".repeat(percNumber));
    if (percNumber != 10) {
        console.log(`${percNumber*10}% ${result.join('')}`);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
        console.log(result.join(''));
    }
}

loadingBar(60);