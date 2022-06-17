function encodeAndDecodeMessages() {

    let firstTextarea = document.getElementsByTagName('textarea')[0];
    let secondTextarea = document.getElementsByTagName('textarea')[1];
    let encodeBtn = document.getElementsByTagName('button')[0];
    let decodeBtn = document.getElementsByTagName('button')[1];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode(ev) {
        let text = firstTextarea.value;
        let result = [];
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            result.push(String.fromCharCode(charCode + 1));
        }
        secondTextarea.value = result.join('');
        firstTextarea.value = '';
    }

    function decode(ev) {
        let text = secondTextarea.value;
        let result = [];
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            result.push(String.fromCharCode(charCode - 1));
        }
        secondTextarea.value = result.join('');
    }

}