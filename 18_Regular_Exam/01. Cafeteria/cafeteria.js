function solve(input) {
    const baristasCount = Number(input.shift());
    const baristas = {};
    const types = [];
    const ordersResult = [];

    for (let i = 0; i < baristasCount; i++) {
        const baristaLine = input.shift();
        const [name, shift, drinkTypes] = baristaLine.split(' ');
        const typesArray = drinkTypes.split(',');

        types.push(...typesArray);

        baristas[name] = {
            shift,
            types: typesArray
        };
    }

    let commandLine = input.shift();

    while (commandLine !== 'Closed') {
        commandLine = commandLine.split(' / ');
        const command = commandLine.shift();

        switch (command) {
            case 'Prepare':
                const baristaName = commandLine.shift();
                const shiftType = commandLine.shift();
                const coffeeTypes = commandLine.shift();

                let resultMessage = '';
                if (baristas[baristaName] && baristas[baristaName].shift === shiftType && baristas[baristaName].types.includes(coffeeTypes)) {
                    resultMessage = `${baristaName} has prepared a ${coffeeTypes} for you!`;
                } else {
                    resultMessage = `${baristaName} is not available to prepare a ${coffeeTypes}.`;
                }
                ordersResult.push(resultMessage);
                break;

            case 'Change Shift':
                const baristaToChange = commandLine.shift();
                const newShift = commandLine.shift();

                if (baristas[baristaToChange]) {
                    baristas[baristaToChange].shift = newShift;
                    ordersResult.push(`${baristaToChange} has updated his shift to: ${newShift}`);
                }
                break;

            case 'Learn':
                const baristaToLearn = commandLine.shift();
                const newCoffeeType = commandLine.shift();

                if (baristas[baristaToLearn] && baristas[baristaToLearn].types.includes(newCoffeeType)) {
                    ordersResult.push(`${baristaToLearn} knows how to make ${newCoffeeType}.`);
                } else {
                    baristas[baristaToLearn].types.push(newCoffeeType);
                    ordersResult.push(`${baristaToLearn} has learned a new coffee type: ${newCoffeeType}.`);
                }
                break;
        }

        commandLine = input.shift();
    }

    for (const result of ordersResult) {
        console.log(result);
    }

    for (const [baristaName, baristaInfo] of Object.entries(baristas)) {
        const { shift, types } = baristaInfo;
        console.log(`Barista: ${baristaName}, Shift: ${shift}, Drinks: ${types.join(', ')}`);
    }
}

solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']
);
