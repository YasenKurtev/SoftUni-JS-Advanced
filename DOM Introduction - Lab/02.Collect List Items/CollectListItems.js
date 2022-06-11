function extractText() {

    let items = Array.from(document.getElementsByTagName('li')).map(e => e.textContent);
    let result = document.getElementById('result');

    result.textContent = items.join('\n');

}