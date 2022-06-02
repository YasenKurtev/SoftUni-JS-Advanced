function timeToWalk(steps, footprintM, speedKM) {

    let totalM = steps * footprintM;
    let extra = Math.floor(totalM / 500);
    let metersPerSecond = speedKM * 1000 / 60 / 60;
    let seconds = 0;
    let minutes = extra;
    let hours = 0;
    let op = 0;

    while (totalM > 0) {
        totalM -= metersPerSecond;
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
    }

    if (Math.ceil(totalM) < 0) {
        seconds--;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    console.log(`${hours}:${minutes}:${seconds}`);

}

timeToWalk(4000, 0.60, 5)