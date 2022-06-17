function solve() {

    let boxes = Array.from(document.getElementsByTagName('input'));
    let checkBtn = document.getElementsByTagName('button')[0];
    let clearBtn = document.getElementsByTagName('button')[1];
    let table = document.getElementsByTagName('table')[0];
    let resultText = document.getElementById('check').children[0];

    checkBtn.addEventListener('click', check);
    clearBtn.addEventListener('click', clear);

    function check(ev) {
        let row1 = [boxes[0].value, boxes[1].value, boxes[2].value];
        let row2 = [boxes[3].value, boxes[4].value, boxes[5].value];
        let row3 = [boxes[6].value, boxes[7].value, boxes[8].value];
        let col1 = [boxes[0].value, boxes[3].value, boxes[6].value];
        let col2 = [boxes[1].value, boxes[4].value, boxes[7].value];
        let col3 = [boxes[2].value, boxes[5].value, boxes[8].value];

        let lines = [row1, row2, row3, col1, col2, col3];
        let isEqual = true;

        for (let line of lines) {
            let sum = line.reduce((a, b) => Number(a) + Number(b));
            if (sum !== 6) {
                isEqual = false;
                break;
            }
        }

        if (isEqual) {
            table.style.border = '2px solid green';
            resultText.textContent = 'You solve it! Congratulations!';
            resultText.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            resultText.textContent = 'NOP! You are not done yet...';
            resultText.style.color = 'red';
        }
    }

    function clear(ev) {
        boxes.map(box => box.value = '');
        table.style.border = 'none';
        resultText.textContent = '';
        resultText.style.color = 'none';
    }

}