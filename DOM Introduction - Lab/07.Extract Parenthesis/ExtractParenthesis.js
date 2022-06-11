function extract(string) {

    let text = document.getElementById(string).textContent;
    let regex = /(?<match>\([A-z\s]+\))/g;
    let result = [];

    while ((valid = regex.exec(text)) !== null) {
        result.push(valid.groups.match.slice(1, -1));
    }

    return result.join('; ');

}