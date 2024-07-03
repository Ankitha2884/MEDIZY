document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const cartButton = document.querySelector('.add-to-cart');
    const cart = document.querySelector('.cart');
    const checkoutButton = document.querySelector('.checkout');
    
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    cartButton.addEventListener('click', () => {
        cart.classList.add('active');
    });

    checkoutButton.addEventListener('click', () => {
        alert('Proceeding to checkout');
    });
});
