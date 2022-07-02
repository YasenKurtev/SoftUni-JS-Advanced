function requestValidator(object) {

    let isCorrect = false;

    if (object['method'] === 'GET' ||
        object['method'] === 'POST' ||
        object['method'] === 'DELETE' ||
        object['method'] === 'CONNECT') {
        isCorrect = true;
    }

    if (object['method'] === undefined) {
        isCorrect = false;
    }

    if (isCorrect === false) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (object['version'] === 'HTTP/0.9' ||
        object['version'] === 'HTTP/1.0' ||
        object['version'] === 'HTTP/1.1' ||
        object['version'] === 'HTTP/2.0') {
        isCorrect = true;
    }

    if (object['version'] === undefined) {
        isCorrect = false;
    }

    if (isCorrect === false) {
        throw new Error('Invalid request header: Invalid Version');
    }

    let pattern1 = /(?<uri>\.*[a-z0-9]+\.*[a-z0-9]*\.*[a-z0-9]*)/g;

    if (object['uri'].length === 0) {
        isCorrect = false;
    }
    if (pattern1.test(object['uri']) !== true) {
        isCorrect = false;
    }
    if (object['uri'] === '*') {
        isCorrect = true;
    }

    if (object['uri'] === undefined) {
        isCorrect = false;
    }

    if (isCorrect === false) {
        throw new Error('Invalid request header: Invalid URI');
    }

    let pattern2 = /[\<\>\\\&\'\"]/g;

    if (object['message'] === undefined) {
        isCorrect = false;
    }

    if (isCorrect === false) {
        throw new Error('Invalid request header: Invalid Message');
    }

    if (object['message'].match(pattern2)) {
        isCorrect = false;
    }
    if (object['message'].length === 0) {
        isCorrect === true;
    }

    if (isCorrect === false) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return object;

}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}))

console.log(requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}))

console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}))