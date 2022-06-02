function wordsUppercase(string) {

    let wordsArr = [];

    let regex = /(?<word>[A-z]+)/g;

    while ((valid = regex.exec(string)) !== null) {
        let word = valid.groups['word'];
        let splited = word.split('');

        for (let i = 0; i < splited.length; i++) {
            let char = splited[i];
            splited[i] = char.toUpperCase();
        }

        wordsArr.push(splited.join(''));
    }

    console.log(wordsArr.join(', '));

}

wordsUppercase('Hi, how are you?')