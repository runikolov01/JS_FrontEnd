function repeatText(text, number) {
    let result = "";
    for (let i = 0; i < number; i++) {
        result += text;
    }
    return result;
}

repeatText("hi", 3);