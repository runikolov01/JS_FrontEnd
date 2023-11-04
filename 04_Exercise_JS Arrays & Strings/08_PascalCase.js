function pascal(text){
    let wordsRegex = /[A-Z][a-z]*/g;
    let wordsArray = text.match(wordsRegex);
    let result = wordsArray.join(', ');
    console.log(result);
}
pascal('SplitMeIfYouCanHaHaYouCantOrYouCan');