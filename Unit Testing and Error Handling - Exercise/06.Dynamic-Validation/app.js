function validate() {

    let input = document.getElementById('email');

    let pattern = /(?<email>[a-z]+\@[a-z]+.[a-z]+)/g;

    input.addEventListener('change', () => {
        if (pattern.test(input.value) === false) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    })

}