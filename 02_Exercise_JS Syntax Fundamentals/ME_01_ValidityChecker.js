function distanceFromOriginValid(x1, y1, x2, y2) {
    let distance1 = Math.sqrt(x1 * x1 + y1 * y1);
    let distance2 = Math.sqrt(x2 * x2 + y2 * y2);
    let distanceBetweenPoints = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

    let validDistances = [];

    if (Number.isInteger(distance1)) {
        validDistances.push(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        validDistances.push(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance2)) {
        validDistances.push(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        validDistances.push(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distanceBetweenPoints)) {
        validDistances.push(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        validDistances.push(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    return validDistances.join('\n');
}

let result = distanceFromOriginValid(2, 1, 1, 1);
console.log(result);
