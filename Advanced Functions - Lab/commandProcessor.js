function solution() {

    let result = '';

    return {
        append(string) {
            return result += string;
        },

        removeStart(n) {
            return result = result.slice(n);
        },

        removeEnd(n) {
            return result = result.slice(0, -n);
        },

        print() {
            return console.log(result);
        }

    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();