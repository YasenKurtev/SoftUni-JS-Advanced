function listProcessor(arr) {

    let result = [];

    function modify() {
        arr.forEach(element => {
            let [command, string] = element.split(' ');
            if (command === 'add') {
                result.push(string);
            } else if (command === 'remove') {
                while (result.includes(string)) {
                    result.splice(result.indexOf(string), 1);
                }
            } else if (command === 'print') {
                console.log(result.join(','));
            }
        });
    }

    return modify();

}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])