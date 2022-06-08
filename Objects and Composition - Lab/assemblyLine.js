function createAssemblyLine() {

    let functions = {
        hasClima(obj) {
            obj.temp = 21,
                obj.tempSettings = 21,
                obj.adjustTemp = function () {
                    if (obj.temp < obj.tempSettings) {
                        obj.temp += 1;
                    } else {
                        obj.temp -= 1;
                    }
                }
        },
        hasAudio(obj) {
            obj.currentTrack = Object.assign({}, 'name', 'artist'),
                obj.nowPlaying = function () {
                    console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
                }
        },
        hasParktronic(obj) {
            obj.checkDistance = function (num) {
                if (num < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (num < 0.25) {
                    console.log("Beep! Beep!");
                } else if (num < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log("");
                }
            }
        }

    }

    return functions;

}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log(myCar);