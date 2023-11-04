function substring(word, text) {
    let wordsArray = text.toLowerCase().split(' ');
    if (wordsArray.includes(word.toLowerCase())) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

//substring('python', 'JavaScript is the best programming language');
