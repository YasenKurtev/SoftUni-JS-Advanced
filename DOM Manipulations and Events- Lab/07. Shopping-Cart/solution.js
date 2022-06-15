function solve() {

    let addButtons = Array.from(document.querySelectorAll('button[class="add-product"]'));
    let checkoutButton = document.querySelector('button[class="checkout"]');
    let allButtons = Array.from(document.getElementsByTagName('button'));
    let result = document.getElementsByTagName('textarea')[0];

    let totalPrice = 0;
    let products = [];

    addButtons.forEach(button => {
        button.addEventListener('click', onAdd);
    });

    checkoutButton.addEventListener('click', onCheckout);

    function onAdd(ev) {
        let location = ev.target.parentNode.parentNode;
        let product = location.getElementsByClassName('product-title')[0].textContent;
        let price = Number(location.getElementsByClassName('product-line-price')[0].textContent);
        totalPrice += price;
        if (!products.includes(product)) {
            products.push(product);
        }
        result.value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
    }

    function onCheckout(ev) {
        result.value += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`
        allButtons.forEach(button => {
            button.disabled = true;
        });
    }

}