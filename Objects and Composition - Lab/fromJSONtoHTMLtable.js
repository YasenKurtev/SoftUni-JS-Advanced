function fromJSONtoHTMLtable(arr) {

    let fromJSON = JSON.parse(arr);
    let keys = Object.keys(fromJSON[0]);

    console.log('<table>');

    let firstRow = '<tr>';

    for (let element of keys) {
        firstRow += `<th>${element}</th>`;
    }

    firstRow += '</tr>';

    console.log(`   ${firstRow}`);

    for (let object of fromJSON) {
        let nextRow = '<tr>';
        for (let element of keys) {
            nextRow += `<td>${object[element]}</td>`;
        }
        nextRow += '</tr>';
        console.log(`   ${nextRow}`);
    }

    console.log('</table>');

}

fromJSONtoHTMLtable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`)