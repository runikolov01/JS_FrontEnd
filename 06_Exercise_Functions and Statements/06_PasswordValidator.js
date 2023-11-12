function passwordvalidator(password) {
    let checker = true;
    if (!checkLength(password)) {
        checker = false;
        console.log("Password must be between 6 and 10 characters");
    }
    if (!checkForLettersAndNumbers(password)) {
        checker = false;
        console.log("Password must consist only of letters and digits");
    }
    if (!checkForLeast2Digits(password)) {
        checker = false;
        console.log("Password must have at least 2 digits");
    }

    if (checker) {
        console.log("Password is valid");
    }




    function checkLength(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function checkForLettersAndNumbers(password) {
        const regex = /^[a-zA-Z0-9]+$/;
        let isCorrect = regex.test(password);
        return isCorrect;
    }

    function checkForLeast2Digits(password) {
        // const digitRegex = /\d/g;
        // return (password.match(digitRegex) || []).length >= 2;
        let digitCounter = 0;

        for (const digit of password) {
            if (!isNaN(digit)) {
                digitCounter++;
            }
        }
        return digitCounter >= 2;
    }
}

passwordvalidator('Pa$s$s');