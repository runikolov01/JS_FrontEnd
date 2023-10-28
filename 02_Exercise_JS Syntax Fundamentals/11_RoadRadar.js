function speedArea(speed, area) {
    let inTheArea = true;
    let limitZone = 0;
    let diff = 0;
    switch (area) {
        case "motorway":
            limitZone = 130;
            if (speed > 130) {
                inTheArea = false;
                diff = speed - limitZone;
            }
            break;
        case "interstate":
            limitZone = 90;
            if (speed > 90) {
                inTheArea = false;
                diff = speed - limitZone;
            }
            break;
        case "city":
            limitZone = 50;
            if (speed > 50) {
                inTheArea = false;
                diff = speed - limitZone;
            }
            break;
        case "residential":
            limitZone = 20;
            if (speed > 20) {
                inTheArea = false;
                diff = speed - limitZone;
            }
            break;
    }
    let status = "";
    if (diff <= 20) {
        status = "speeding";
    }
    else if (diff > 20 && diff <= 40) {
        status = "excessive speeding";
    }
    else {
        status = "reckless driving";
    }

    if (inTheArea) {
        console.log(`Driving ${speed} km/h in a ${limitZone} zone`)
    } else {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limitZone} - ${status}`)
    }
}

speedArea(21, 'residential');