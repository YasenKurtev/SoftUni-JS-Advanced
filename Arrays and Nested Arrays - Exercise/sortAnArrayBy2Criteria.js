function sortAnArrayBy2Criteria(arr) {

    arr.sort(compare);

    function compare(a, b) {
        if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    }

    console.log(arr.join('\n'));

}

sortAnArrayBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'])