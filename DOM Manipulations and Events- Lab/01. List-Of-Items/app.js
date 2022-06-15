function addItem() {

    let list = document.getElementById('items');
    let input = document.getElementById('newItemText');

    let newLi = document.createElement('li');
    newLi.textContent = input.value;
    list.appendChild(newLi);

    input.value = '';

}