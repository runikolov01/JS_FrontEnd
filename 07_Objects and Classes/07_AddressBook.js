function getAddresses(input) {
    const addressList = {};

    for (const person of input) {
        const [name, address] = person.split(":");
        addressList[name] = address;
    }

    //const peopleNames = Object.entries(addressList);
    // const sortedPeople = peopleNames.sort();
    const sortedPeople = Object.entries(addressList);
    sortedPeople.sort((a, b) => a[0].localeCompare(b[0]));

    for (const key of sortedPeople) {
        console.log(`${key[0]} -> ${key[1]}`)
    }
}

getAddresses(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);
