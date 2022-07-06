function tickets(arr, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let result = [];

    for (let element of arr) {
        let [destination, price, status] = element.split('|');
        let newTicket = new Ticket(destination, price, status);
        result.push(newTicket);
    }

    if (criteria === 'price') {
        result = result.sort((a, b) => a.price - b.price);
    } else {
        result = result.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }

    return result;

}

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status')