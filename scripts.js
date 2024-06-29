function toggleMenu() {
    const menu = document.querySelector('header nav ul');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

function addToCart(productId, price) {
    const quantity = document.getElementById(`quantity${productId}`).value;
    const total = price * quantity;
    alert(`Added to cart: Product ${productId} - Quantity: ${quantity} - Total: ₹${total}`);
}

function checkout() {
    window.location.href = 'checkout.html';
}
