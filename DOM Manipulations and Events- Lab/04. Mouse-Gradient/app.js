function attachGradientEvents() {

    let result = document.getElementById('result');
    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', mouseMove);
    gradient.addEventListener('mouseout', mouseOut);

    function mouseMove(ev) {
        let percent = Math.floor(ev.offsetX / gradient.clientWidth * 100);
        result.textContent = `${percent}%`;
    }

    function mouseOut() {
        result.textContent = '';
    }

}