function attachEventsListeners() {

    let btn = document.getElementById('convert');
    let input = document.getElementById('inputDistance');
    let output = document.getElementById('outputDistance');

    btn.addEventListener('click', convert);

    function convert(ev) {
        let inputOption = document.getElementById('inputUnits');
        let outputOption = document.getElementById('outputUnits');
        let inputToMeters = 0;

        if (inputOption.value === 'km') {
            inputToMeters = input.value * 1000;
        } else if (inputOption.value === 'm') {
            inputToMeters = input.value;
        } else if (inputOption.value === 'cm') {
            inputToMeters = input.value * 0.01;
        } else if (inputOption.value === 'mm') {
            inputToMeters = input.value * 0.001;
        } else if (inputOption.value === 'mi') {
            inputToMeters = input.value * 1609.34;
        } else if (inputOption.value === 'yrd') {
            inputToMeters = input.value * 0.9144;
        } else if (inputOption.value === 'ft') {
            inputToMeters = input.value * 0.3048;
        } else if (inputOption.value === 'in') {
            inputToMeters = input.value * 0.0254;
        }

        if (outputOption.value === 'km') {
            output.value = inputToMeters / 1000;
        } else if (outputOption.value === 'm') {
            inputToMeters = output.value = inputToMeters;
        } else if (outputOption.value === 'cm') {
            inputToMeters = output.value = inputToMeters / 0.01;
        } else if (outputOption.value === 'mm') {
            inputToMeters = output.value = inputToMeters / 0.001;
        } else if (outputOption.value === 'mi') {
            inputToMeters = output.value = inputToMeters / 1609.34;
        } else if (outputOption.value === 'yrd') {
            inputToMeters = output.value = inputToMeters / 0.9144;
        } else if (outputOption.value === 'ft') {
            inputToMeters = output.value = inputToMeters / 0.3048;
        } else if (outputOption.value === 'in') {
            inputToMeters = output.value = inputToMeters / 0.0254;
        }
    }

}