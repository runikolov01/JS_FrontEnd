function convertJSONtoObject(json) {
    let object = JSON.parse(json);
    for (const entry of Object.entries(object)) {
        const [key, value] = entry;
        console.log(`${key}: ${value}`);
    }
}

console.log(convertJSONtoObject('{"name": "George", "age": 40, "town": "Sofia"}'));