function solve() {

    document.getElementsByTagName('button')[0].addEventListener('click', onClick);

    let num = Number(document.getElementById('input').value);

    let selectMenu = document.getElementById('selectMenuTo');

    let binary = document.createElement('option');
    binary.text = 'Binary';
    binary.value = 'binary';
    let hexadecimal = document.createElement('option');
    hexadecimal.text = 'Hexadecimal';
    hexadecimal.value = 'hexadecimal';

    selectMenu.add(binary);
    selectMenu.add(hexadecimal);

    function onClick() {
        if(document.querySelector('option[value="binary"]').selected){
            
        }
    }
}