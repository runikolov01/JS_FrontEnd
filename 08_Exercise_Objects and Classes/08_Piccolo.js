function piccolo(input) {
    let parkingLot = [];

    for (const car of input) {
        let [direction, number] = car.split(', ');

        if (direction === 'IN' && !parkingLot.includes(number)) {
            parkingLot.push(number);
        }
        else if (direction === 'OUT' && parkingLot.includes(number)) {
            let index = parkingLot.indexOf(number);
            parkingLot.splice(index, 1);
        }
    }

    if (parkingLot.length > 0) {
        let sortedNumbers = parkingLot.sort((a, b) => {
            return a.localeCompare(b);
        });
        sortedNumbers.forEach(n => console.log(n));
    } else {
        console.log('Parking Lot is empty.');
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);