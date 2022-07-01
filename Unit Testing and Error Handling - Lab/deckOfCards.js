function deckOfCards(arr) {

    let result = [];

    for (let card of arr) {
        let face = card.slice(0, card.length - 1);
        let suit = card[card.length - 1];

        try {
            let currentCard = playingCards(face, suit);
            result.push(currentCard);
        } catch (err) {
            result = [`Invalid card: ${card}`];
        }
    }

    console.log(result.join(' '));

    function playingCards(face, suit) {

        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        }

        if (!faces.includes(face)) {
            throw new Error(`Invalid Face: ${face}`);
        }

        if (!suits.hasOwnProperty(suit)) {
            throw new Error(`Invalid SUit: ${suit}`);
        }

        return (face + suits[suit]).toString();

    }

}

deckOfCards(['AS', '10D', 'KH', '2C'])
deckOfCards(['5S', '3D', 'QD', '1C'])