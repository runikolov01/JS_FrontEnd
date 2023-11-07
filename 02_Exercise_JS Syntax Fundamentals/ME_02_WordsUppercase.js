function uppercase(text){
    let pattern = /\w+/g;
    let words = text.match(pattern);
    let uppWordsArray = words.map(word => word.toUpperCase());
    let stringUppWords = uppWordsArray.join(', ');
    console.log(stringUppWords);
}

uppercase('Hi, how are you?');