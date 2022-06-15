function validate() {

    let input = document.getElementById('email');
    let regex = /(?<email>[a-z]+\@[a-z]+\.[a-z]+)/g;

    input.addEventListener('change', onChange);

    function onChange(ev) {
        if (regex.test(ev.target.value) !== true) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }

}