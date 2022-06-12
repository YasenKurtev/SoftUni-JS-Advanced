function solve() {

    let input = document.getElementById('text').value.split(' ');
    let type = document.getElementById('naming-convention').value;
    result = 0;

    if (type === 'Camel Case') {
        input[0] = input[0].toLowerCase();
        for (let i = 1; i < input.length; i++) {
            input[i] = input[i].toLowerCase().split('');
            input[i][0] = input[i][0].toUpperCase();
            input[i] = input[i].join('');
        }
        result = input.join('');
    } else if (type === 'Pascal Case') {
        for (let i = 0; i < input.length; i++) {
            input[i] = input[i].toLowerCase().split('');
            input[i][0] = input[i][0].toUpperCase();
            input[i] = input[i].join('');
        }
        result = input.join('');
    } else {
        result = 'Error!';
    }

    document.getElementById('result').textContent = result;

}