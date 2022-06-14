function solve() {

    let text = document.getElementById('input').value.split('.');
    let div = document.getElementById('output');

    let temp = [];

    for (let i = 0; i < text.length; i++) {
        if (text[i].length > 0) {
            temp.push(`${text[i]}.`);
        }
        if (temp.length === 3) {
            let para = document.createElement('p');
            let node = document.createTextNode(`${temp.join(' ')}`);
            para.appendChild(node);
            div.appendChild(para);
            temp = [];
        }
    }

    if (temp.length !== 0) {
        let para = document.createElement('p');
        let node = document.createTextNode(`${temp.join(' ')}`);
        para.appendChild(node);
        div.appendChild(para);
    }

}