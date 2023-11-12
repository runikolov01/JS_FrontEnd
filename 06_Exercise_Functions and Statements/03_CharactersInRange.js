function chars(first, second) {
    let result = '';
    let start = first.charCodeAt();
    let end = second.charCodeAt();
    let current = '';
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    for (let i = start + 1; i < end; i++) {
        current = String.fromCharCode(i);
        result += `${current} `;
    }
    console.log(result.trimEnd());
}

chars('d', 'a');