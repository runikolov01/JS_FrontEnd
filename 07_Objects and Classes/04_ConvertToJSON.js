function convertToJson(firstName, lastName, hairColor) {
    let obj = {};
    obj.name = firstName;
    obj.lastName = lastName;
    obj.hairColor = hairColor;
    let json = JSON.stringify(obj);
    return json;
}

console.log(convertToJson('George', 'Jones', 'Brown'));