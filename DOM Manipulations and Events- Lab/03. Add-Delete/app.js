function addItem() {

    let list = document.getElementById('items');
    let input = document.getElementById('newItemText');
    let newLi = document.createElement('li');
    newLi.textContent = input.value;

    let newA = document.createElement('a');
    newA.textContent = '[Delete]';
    newA.href = '#';

    newLi.appendChild(newA);
    list.appendChild(newLi);

    input.value = '';

    newA.addEventListener('click', deleteItem);

    function deleteItem(ev) {
        ev.target.parentNode.remove();
    }
    
}