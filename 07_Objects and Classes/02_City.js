function printParameters(object) {
    for (const entry of Object.entries(object)) {
        const [key, value] = entry;
        console.log(`${key} -> ${value}`);
    }
}

printParameters({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);