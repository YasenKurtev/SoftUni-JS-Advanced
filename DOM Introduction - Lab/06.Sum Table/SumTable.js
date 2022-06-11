function sumTable() {

    let rows = Array.from(document.getElementsByTagName('tr'));
    let result = document.getElementById('sum');
    let sum = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        sum += Number(rows[i].children[1].textContent);
    }

    result.textContent = sum;
    
}