function colorize() {

    let rows = Array.from(document.getElementsByTagName('tr'));
    rows.shift();

    for (let i = 0; i < rows.length; i += 2) {
        rows[i].style.background = 'teal';
    }

}