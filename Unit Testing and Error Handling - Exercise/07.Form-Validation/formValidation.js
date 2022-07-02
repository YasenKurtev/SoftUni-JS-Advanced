function validate() {

    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    let checkbox = document.getElementById('company');
    let button = document.getElementById('submit');
    let div = document.getElementById('valid');
    let companyNumber = document.getElementById('companyNumber');
    let companyInfo = document.getElementById('companyInfo');

    let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
    let passwordPattern = /^[\w]{5,15}$/;
    let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;

    checkbox.addEventListener('change', onChecked);
    button.addEventListener('click', onSubmit);

    function onChecked(ev) {
        if (checkbox.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }

    function onSubmit(ev) {

        ev.preventDefault();

        let states = [];

        if (!usernamePattern.test(username.value)) {
            username.style.borderColor = 'red';
            states.push(false);
        } else {
            username.style.border = 'none';
            states.push(true);
        }

        if (!passwordPattern.test(password.value) ||
            password.value !== confirmPassword.value ||
            password.value === '' ||
            confirmPassword.value === '') {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            states.push(false);
        } else {
            password.style.border = 'none';
            confirmPassword.style.border = 'none';
            states.push(true);
        }

        if (!emailPattern.test(email.value)) {
            email.style.borderColor = 'red';
            states.push(false);
        } else {
            email.style.border = 'none';
            states.push(true);
        }

        if (checkbox.checked) {
            if (Number(companyNumber.value) < 1000 ||
                Number(companyNumber.value) > 9999 ||
                companyNumber.value === '') {
                companyNumber.style.borderColor = 'red';
                states.push(false);
            } else {
                companyNumber.style.border = 'none';
                states.push(true);
            }
        }

        if (!states.includes(false)) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }

        states = [];

    }

}