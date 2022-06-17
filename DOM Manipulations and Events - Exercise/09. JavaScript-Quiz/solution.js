function solve() {

    let buttons = Array.from(document.getElementsByTagName('p'));
    let hiddenQuestions = Array.from(document.getElementsByTagName('section'));
    let result = document.getElementsByTagName('h1')[1];

    buttons.forEach(button => {
        button.addEventListener('click', onClick);
    });

    let correctAnswers = 0;
    let index = 0;

    function onClick(ev) {
        if (ev.target.textContent === 'onclick') {
            correctAnswers++;
        }
        if (ev.target.textContent === 'JSON.stringify()') {
            correctAnswers++;
        }
        if (ev.target.textContent === 'A programming API for HTML and XML documents') {
            correctAnswers++;
        }
        hiddenQuestions[index].style.display = 'none';
        if (index < 2) {
            index++;
            hiddenQuestions[index].style.display = 'block';
        } else {
            if (correctAnswers === 3) {
                result.textContent = "You are recognized as top JavaScript fan!";
            } else {
                result.textContent = `You have ${correctAnswers} right answers`
            }
            document.getElementById('results').style.display = 'block';
        }
    }

}