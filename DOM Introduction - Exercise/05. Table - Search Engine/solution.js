function solve() {

    document.getElementById('searchBtn').addEventListener('click', onCLick);

    let rows = Array.from(document.getElementsByTagName('tr'));
    let search = document.getElementById('searchField');

    function onCLick() {
        for (let i = 2; i < rows.length; i++) {
            rows[i].classList.remove('select');
            let columns = Array.from(rows[i].children);
            for (let element of columns) {
                if (element.textContent.includes(search.value)) {
                    rows[i].classList.add('select');
                    break;
                }
            }
        }

        search.value = '';
    }

}