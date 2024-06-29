function toggleMenu() {
    const menu = document.getElementById('menuList');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

function increaseQuantity(id) {
    const quantityInput = document.getElementById(`quantity${id}`);
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity < 10) {
        quantityInput.value = currentQuantity + 1;
    }
}

function decreaseQuantity(id) {
    const quantityInput = document.getElementById(`quantity${id}`);
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}

function addToCart(productId, price) {
    const quantity = document.getElementById(`quantity${productId}`).value;
    const total = price * quantity;
    alert(`Added to cart: Product ${productId} - Quantity: ${quantity} - Total: ₹${total}`);
    // Update cart icon, etc. as needed
}
