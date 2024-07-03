function increaseQuantity(id) {
    let quantityInput = document.getElementById(`quantity${id}`);
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity < 10) {
        quantityInput.value = currentQuantity + 1;
    }
}

function decreaseQuantity(id) {
    let quantityInput = document.getElementById(`quantity${id}`);
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}

function addToCart(id, price) {
    let quantityInput = document.getElementById(`quantity${id}`);
    let quantity = parseInt(quantityInput.value);
    let totalPrice = quantity * price;
    alert(`Added ${quantity} item(s) to the cart. Total price: ₹${totalPrice}`);
}
