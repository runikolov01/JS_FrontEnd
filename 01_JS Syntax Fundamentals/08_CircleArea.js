function circleArea(num) {
    let result = 0;
    if (typeof (num) === "number") {
        result = Math.PI * num * num;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(num)}.`);
    }
}

circleArea("gfg");