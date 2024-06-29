// scripts.js

function addToCart(productId, quantity) {
    // Example logic to add product to cart
    console.log(`Adding product ${productId} with quantity ${quantity} to cart`);
    // Add your cart handling logic here
}

document.addEventListener('DOMContentLoaded', function () {
    const addButtons = document.querySelectorAll('.product-item button');
    addButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const quantityInput = document.querySelector(`#quantity${index + 1}`);
            const quantity = quantityInput.value;
            addToCart(index + 1, quantity);
        });
    });
});
