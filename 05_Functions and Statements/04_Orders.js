function order(product, number) {
    let price = findPrice(product);
    let result = calculateTotalPrice(price, number);
    console.log(result.toFixed(2));

    function findPrice(product) {
        let price = 0;
        switch (product) {
            case "coffee":
                price = 1.50;
                break;
            case "water":
                price = 1.00;
                break;
            case "coke":
                price = 1.40;
                break;
            case "snacks":
                price = 2.00;
                break;
        }
        return price;
    }

    function calculateTotalPrice(price, number) {
        let result = 0;
        return result = price * number;
    }
}



order("coffee", 2);