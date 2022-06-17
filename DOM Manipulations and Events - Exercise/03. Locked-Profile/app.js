function lockedProfile() {

    let buttons = Array.from(document.getElementsByTagName('button'));

    buttons.forEach(button => {
        button.addEventListener('click', onCLick);
    });

    function onCLick(ev) {
        let location = ev.target.parentNode;
        let radio = location.querySelector('input[value="unlock"]');
        let hiddenDiv = location.getElementsByTagName('div')[0];
        if (radio.checked === true && ev.target.textContent === 'Show more') {
            hiddenDiv.style.display = 'inline';
            ev.target.textContent = 'Hide it';
        } else if (radio.checked === true && ev.target.textContent === 'Hide it') {
            hiddenDiv.style.display = 'none';
            ev.target.textContent = 'Show more';
        }
    }

}