function sortArray(arr, string) {

    if (string === 'asc') {
        return arr.sort((a, b) => a - b);
    } else if (string === 'desc') {
        return arr.sort((a, b) => b - a);
    }

}

sortArray([14, 7, 17, 6, 8], 'asc')