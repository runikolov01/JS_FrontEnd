function parseAndCombine(jsonStrings) {
    let dictionary = {};

    jsonStrings.forEach(jsonString => {
        let data = JSON.parse(jsonString);
        let term = Object.keys(data)[0];
        let definition = Object.values(data)[0];
        dictionary[term] = definition;
    });

    let sortedDictionary = {};
    Object.keys(dictionary).sort().forEach(term => {
        sortedDictionary[term] = dictionary[term];
    });

    for (let term in sortedDictionary) {
        console.log(`Term: ${term} => Definition: ${sortedDictionary[term]}`);
    }
}

parseAndCombine([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);