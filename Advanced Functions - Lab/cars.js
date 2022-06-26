function cars(arr) {

    let object = {};
    let inherits = [];

    for (let element of arr) {

        if (element.includes('inherit')) {
            inherits.push(element);
        }

        let [command1, name1, command2, name2] = element.split(' ');

        if (command1 === 'create') {
            object[name1] = [];
        }

        if (command1 === 'set') {
            object[name1].push(`${command2}:${name2}`);
        }

        if (command1 === 'print') {
            for (let command of inherits) {
                let [command1, name1, command2, name2] = command.split(' ');
                for (let property of object[name2]) {
                    if (!object[name1].includes(property)) {
                        object[name1].push(property);
                    }
                }
            }

            console.log(object[name1]);
        }
    }
}

cars(['create pesho', 'create gosho inherit pesho', 'create stamat inherit gosho', 'set pesho rank number1', 'set gosho nick goshko', 'print stamat'])