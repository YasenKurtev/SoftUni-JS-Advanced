function focused() {

    let inputs = Array.from(document.getElementsByTagName('input'));

    for (let input of inputs) {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    }

    function onFocus(ev) {
        ev.target.parentNode.classList.add('focused');
    }

    function onBlur(ev) {
        ev.target.parentNode.classList.remove('focused');
    }

}