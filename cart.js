cart = document.querySelector('.cart')
if (cart.textContent === '') {
    cart.innerHTML = "<center><h1>Cart is empty<i class='fa-solid fa-cart-shopping'></i></h1><center><p>There is nothing in your bag. Let's add some items.</p> <a href='collection.html'>Add items to Cart</a>"
    cart.setAttribute('class', 'emptycart');
}   