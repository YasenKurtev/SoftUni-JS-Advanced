function solve() {

    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    let addBtn = document.getElementById('add');
    let sections = Array.from(document.getElementsByTagName('section'));
    let startBtn = document.createElement('button');
    startBtn.textContent = 'Start';
    startBtn.classList.add('green');
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('red');

    addBtn.addEventListener('click', onAdd);

    function onAdd(ev) {
        ev.preventDefault();
        if (task.value !== '' && description.value !== '' && date.value !== '') {
            let newArticle = document.createElement('article');
            let newH3 = document.createElement('h3');
            newH3.textContent = task.value;
            let newP1 = document.createElement('p');
            newP1.textContent = `Description: ${description.value}`;
            let newP2 = document.createElement('p');
            newP2.textContent = `Due Date: ${date.value}`;
            let newDiv = document.createElement('div');
            newDiv.classList.add('flex');
            let newStart = startBtn.cloneNode('deep');
            newStart.addEventListener('click', onStart);
            let newDelete = deleteBtn.cloneNode('deep');
            newDelete.addEventListener('click', onDelete);

            newDiv.appendChild(newStart);
            newDiv.appendChild(newDelete);
            newArticle.appendChild(newH3);
            newArticle.appendChild(newP1);
            newArticle.appendChild(newP2);
            newArticle.appendChild(newDiv);
            sections[1].children[1].appendChild(newArticle);
        }
    }

    function onStart(ev) {
        let currentDiv = ev.target.parentNode.parentNode;
        let buttons = currentDiv.getElementsByTagName('button');
        buttons[0].textContent = 'Delete';
        buttons[0].classList.remove('green');
        buttons[0].classList.add('red');
        buttons[0].removeEventListener('click', onStart);
        buttons[0].addEventListener('click', onDelete);
        buttons[1].textContent = 'Finish';
        buttons[1].classList.remove('red');
        buttons[1].classList.add('orange');
        buttons[1].removeEventListener('click', onDelete);
        buttons[1].addEventListener('click', onFinish);

        sections[2].children[1].appendChild(currentDiv);
    }

    function onDelete(ev) {
        let currentDiv = ev.target.parentNode.parentNode;
        currentDiv.remove();
    }

    function onFinish(ev) {
        let currentDiv = ev.target.parentNode.parentNode;
        sections[3].children[1].appendChild(currentDiv);
        ev.target.parentNode.remove();
    }

}