function calculateMoneyToBuyFood(text, grams, pricePerKg) {
    let kg = grams / 1000.00;
    let money = kg * pricePerKg;
    console.log(`I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${text}.`);
}

calculateMoneyToBuyFood('orange', 2500, 1.80);