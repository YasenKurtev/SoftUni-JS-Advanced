function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll('input[type=button]'));
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    buttons.forEach(button => {
        button.addEventListener('click', onClick);
    });

    function onClick(ev) {
        let location = ev.target.parentNode;
        let input = location.querySelector('input[type=text]');
        let num = input.value;
        let id = input.id;
        if (id === 'days') {
            hoursInput.value = num * 24;
            minutesInput.value = num * 1440;
            secondsInput.value = num * 86400;
        } else if (id === 'hours') {
            daysInput.value = num / 24;
            minutesInput.value = num * 60;
            secondsInput.value = num * 60 * 60;
        } else if (id === 'minutes') {
            daysInput.value = num / 60 / 24;
            hoursInput.value = num / 60;
            secondsInput.value = num * 60;
        } else if (id === 'seconds') {
            daysInput.value = num / 60 / 60 / 24;
            hoursInput.value = num / 60 / 60;
            minutesInput.value = num / 60;
        }
    }

}