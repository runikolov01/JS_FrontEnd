function reveal(array, sentence) {
    let splitted = array.split(', ');
    for (let i = 0; i < splitted.length; i++) {
        let currentWord = splitted[i];
        let number = Number(currentWord.length);
        let stars = '*'.repeat(number);
        sentence = sentence.replace(stars, currentWord);
    }
    console.log(sentence);
}

reveal('great, learning',
    'softuni is ***** place for ******** new programming languages'
);