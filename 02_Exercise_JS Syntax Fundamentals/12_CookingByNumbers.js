function cooking(number, a, b, c, d, e) {
    let list = [a, b, c, d, e];
    number = Number(number);
    for (let i = 0; i < list.length; i++) {
        let currentWord = list[i];
        switch (currentWord) {
            case 'chop':
                number = number / 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number = number + 1;
                break;
            case 'bake':
                number = number * 3;
                break;
            case 'fillet':
                number = number - (number * 0.2);
                break;
        }
        console.log(number);
    }
}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');