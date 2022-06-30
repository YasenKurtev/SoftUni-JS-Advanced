function solve() {

    let onScreebBtn = document.getElementsByTagName('button')[0];
    let clearBtn = document.getElementsByTagName('button')[1];
    let name = document.getElementsByTagName('input')[0];
    let hall = document.getElementsByTagName('input')[1];
    let ticketPrice = document.getElementsByTagName('input')[2];
    let onScreenList = document.getElementsByTagName('ul')[0];
    let archiveList = document.getElementsByTagName('ul')[1];

    onScreebBtn.addEventListener('click', onScreen);
    clearBtn.addEventListener('click', onClear);

    function onScreen(ev) {
        ev.preventDefault();
        if (name.value !== '' && hall.value !== '' && ticketPrice.value !== '' && Number(ticketPrice.value)) {
            let newLi = document.createElement('li');
            let newSpan = document.createElement('span');
            newSpan.textContent = name.value;
            let newStrong1 = document.createElement('strong');
            newStrong1.textContent = `Hall: ${hall.value}`;
            let newDiv = document.createElement('div');
            let newStrong2 = document.createElement('strong');
            newStrong2.textContent = Number(ticketPrice.value).toFixed(2);
            let newInput = document.createElement('input');
            newInput.placeholder = 'Tickets Sold';
            let newBtn = document.createElement('button');
            newBtn.textContent = 'Archive';
            newBtn.addEventListener('click', onArchive);

            newDiv.appendChild(newStrong2);
            newDiv.appendChild(newInput);
            newDiv.appendChild(newBtn);
            newLi.appendChild(newSpan);
            newLi.appendChild(newStrong1);
            newLi.appendChild(newDiv);
            onScreenList.appendChild(newLi);

            name.value = '';
            hall.value = '';
            ticketPrice.value = '';
        }
    }

    function onArchive(ev) {
        let input = ev.target.parentNode.getElementsByTagName('input')[0];
        let ticketPrice = ev.target.parentNode.getElementsByTagName('strong')[0];
        let name = ev.target.parentNode.parentNode.getElementsByTagName('span')[0];
        if (Number(input.value) || input.value === '0') {
            let totalPrice = Number(input.value) * Number(ticketPrice.textContent);
            let newLi = document.createElement('li');
            let newSpan = document.createElement('span');
            newSpan.textContent = name.textContent;
            let newStrong1 = document.createElement('strong');
            newStrong1.textContent = `Total amount: ${totalPrice.toFixed(2)}`;
            let newBtn = document.createElement('button');
            newBtn.textContent = 'Delete';
            console.log(newBtn);
            newBtn.addEventListener('click', onDelete);

            newLi.appendChild(newSpan);
            newLi.appendChild(newStrong1);
            newLi.appendChild(newBtn);
            archiveList.appendChild(newLi);

            ev.target.parentNode.parentNode.remove();
        }

    }

    function onDelete(ev) {
        ev.target.parentNode.remove();
    }

    function onClear(ev) {
        let list = ev.target.parentNode.children[1];
        for (let element of Array.from(list.children)) {
            element.remove();
        }
    }
}