function playingCards(face, suit) {

    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    if (!faces.includes(face)) {
        throw new Error(`Invalid Face: ${face}`);
    }

    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }

    return (face + suits[suit]).toString();

}

console.log(playingCards('A', 'S').toString())
console.log(playingCards('10', 'H').toString())
console.log(playingCards('1', 'C').toString())