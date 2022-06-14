function generateReport() {

    let boxes = Array.from(document.getElementsByTagName('input'));
    let rows = Array.from(document.getElementsByTagName('tr')).slice(1);

    let result = [];

    for (let row of rows) {
        let obj = {};
        let cells = Array.from(row.children);
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].checked) {
                let key = boxes[i].getAttribute('name');
                let value = cells[i].textContent;
                obj[key] = value;
            }
        }
        result.push(obj);
    }

    document.getElementById('output').value = JSON.stringify(result, undefined, 4);

}    