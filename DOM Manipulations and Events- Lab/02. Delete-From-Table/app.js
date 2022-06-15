function deleteByEmail() {

    let input = document.getElementsByTagName('input')[0];
    let list = document.querySelectorAll('tbody td');
    let result = document.getElementById('result');

    for (let i = 1; i < list.length; i += 2) {
        if (list[i].textContent === input.value) {
            list[i].parentElement.remove();
            result.textContent = 'Deleted.';
            break;
        } else {
            result.textContent = 'Not found.';
        }
    }

    input.value = '';

}