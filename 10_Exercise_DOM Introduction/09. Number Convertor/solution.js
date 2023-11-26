function solve() {
    const selectMenuTo = document.getElementById("selectMenuTo");
    const binaryOption = document.createElement("option");
    binaryOption.value = "binary";
    binaryOption.text = "Binary";
    const hexOption = document.createElement("option");
    hexOption.value = "hexadecimal";
    hexOption.text = "Hexadecimal";
    selectMenuTo.appendChild(binaryOption);
    selectMenuTo.appendChild(hexOption);

    const convertButton = document.querySelector("button");
    convertButton.addEventListener("click", convertNumber);

    function convertNumber() {
        const inputValue = document.getElementById("input").value;
        const fromOption = document.getElementById("selectMenuFrom").value;
        const toOption = document.getElementById("selectMenuTo").value;

        let result;
        if (toOption === "binary") {
            result = decimalToBinary(inputValue);
        } else if (toOption === "hexadecimal") {
            result = decimalToHexadecimal(inputValue);
        } else {
            result = "Invalid conversion";
        }

        document.getElementById("result").value = result;
    }

    function decimalToBinary(decimalNumber) {
        return parseInt(decimalNumber, 10).toString(2);
    }

    function decimalToHexadecimal(decimalNumber) {
        return parseInt(decimalNumber, 10).toString(16).toUpperCase();
    }
}