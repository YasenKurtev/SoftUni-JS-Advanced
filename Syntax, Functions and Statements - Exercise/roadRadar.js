function roadRadar(speed, area) {

    let limit = 0;
    let status = '';

    if (area === 'motorway') {
        limit = 130;
    } else if (area === 'interstate') {
        limit = 90;
    } else if (area === 'city') {
        limit = 50;
    } else if (area === 'residential') {
        limit = 20;
    }

    let diff = speed - limit;

    if (diff > 0 && diff <= 20) {
        status = 'speeding';
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    } else if (diff > 20 && diff <= 40) {
        status = 'excessive speeding';
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    } else if (diff > 40) {
        status = 'reckless driving';
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }

}

roadRadar(40, 'city')