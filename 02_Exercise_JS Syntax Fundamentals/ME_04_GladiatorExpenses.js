function calculate(fights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetNumber = 0;
    let swordNumber = 0;
    let shieldNumber = 0;
    let armorNumber = 0;

    for (let i = 1; i <= fights; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            helmetNumber += 1;
            swordNumber += 1;
            shieldNumber += 1;
            if (shieldNumber % 2 === 0) {
                armorNumber += 1;
            }
        }
        else if (i % 2 === 0) {
            helmetNumber += 1;
        }
        else if (i % 3 === 0) {
            swordNumber += 1;
        }
    }

    let helmetTotal = helmetNumber * helmetPrice;
    let swordTotal = swordNumber * swordPrice;
    let shieldTotal = shieldNumber * shieldPrice;
    let armorTotal = armorNumber * armorPrice;

    let total = (helmetTotal + swordTotal + shieldTotal + armorTotal).toFixed(2);

    console.log(`Gladiator expenses: ${total} aureus`);
}

calculate(23,
    12.50,
    21.50,
    40,
    200
);