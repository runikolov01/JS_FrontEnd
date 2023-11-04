function modern(sentence) {
    let regex = /#[A-Za-z]+/gm;
    let matches = sentence.match(regex);
    for (const word of matches) {
        console.log(word.replace('#', ''));
    }
}

//modern('Nowadays everyone uses # to tag a #special word in #socialMedia');