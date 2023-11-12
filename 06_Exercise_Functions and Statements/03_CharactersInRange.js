function chars(first, second) {
    let result = '';
    let start = Math.min(first.charCodeAt(), second.charCodeAt());
    let end = Math.max(first.charCodeAt(), second.charCodeAt());
    let current = '';
    for (let i = start + 1; i < end; i++) {
        current = String.fromCharCode(i);
        result += `${current} `;
    }
    console.log(result.trimEnd());
}

chars('d', 'a');