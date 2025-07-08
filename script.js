var sn = document.querySelector('.side-navbar')
function addSN() {
    sn.style.left = '0%'
}
function closeSN() {
    sn.style.left = '-70%'
}

const items = document.querySelectorAll('.product-box')
function addtocart(index) {
    const img = items[index].querySelector('img').src;
    const name = items[index].querySelector('p').textContent;
    const price = parseFloat(items[index].querySelector('.price').textContent.replace("₹", ""));

    let cartitems = JSON.parse(localStorage.getItem("cartitems")) || [];

    const existingItem = cartitems.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1; // Increment quantity
    } else {
        cartitems.push({ name, img, quantity: 1, price }); // Add new item with quantity
    }

    localStorage.setItem("cartitems", JSON.stringify(cartitems));
    updateCartBadge();

    alert(`${name} is added to cart`);
}


window.onload = function () {
    const cart = document.querySelector('.cart-container');
    if (cart) {
        const cartitems = JSON.parse(localStorage.getItem("cartitems")) || [];
        if (cartitems.length == 0) {
            cart.innerHTML = "<div><h1>Cart is empty<i class='fa-solid fa-cart-shopping'></i></h1><p>There is nothing in your bag. Let's add some items.</p> <a href='collection.html'>Add items to Cart</a></div>"
            cart.setAttribute('class', 'emptycart');
            document.querySelector('.clearCart').style.display = 'none';
        }
        else {
            let subtotal = 0;
            var carthead = document.createElement('h1');
            carthead.textContent = 'Your Cart Items';
            carthead.style.display = 'block';
            carthead.style.width = '80vm';
            cart.appendChild(carthead);
            cartitems.forEach((item, index) => {
                const itemdiv = document.createElement('div');
                itemdiv.classList.add('cart-item')

                let itemTotal = item.price * item.quantity;
                subtotal += itemTotal;

                itemdiv.innerHTML = `<img src=${item.img}>
            <p>${item.name}</p>
            <p>₹${item.price} × ${item.quantity} = ₹${itemTotal}</p>
            <div class="controls">
            <button onclick="decreaseQuantity(${index})">−</button>
            <span>${item.quantity}</span>
            <button onclick="increaseQuantity(${index})">+</button>
            <button onclick="removeItem(${index})" style='background-color: transparent;'>🗑️</button>
            </div>`;
                cart.appendChild(itemdiv);

            });
            document.querySelector('.clearCart').style.display = 'block';


            const billingDiv = document.createElement('div');
            billingDiv.classList.add('billing');

            const tax = Math.round(subtotal * 0.05); // 5% GST
            const total = subtotal + tax;

            billingDiv.innerHTML = `
                            <hr>
                        <h3>Billing Summary</h3>
             <p>Subtotal: ₹${subtotal}</p>
                <p>Tax (5% GST): ₹${tax}</p>
                     <p><strong>Total: ₹${total}</strong></p>
                     <button onclick="alert('Proceeding to checkout...')">Proceed to Checkout</button>
`;

            cart.appendChild(billingDiv);

        }
    }
};

function increaseQuantity(index) {
    let cartitems = JSON.parse(localStorage.getItem('cartitems')) || [];
    cartitems[index].quantity += 1;
    localStorage.setItem('cartitems', JSON.stringify(cartitems));
    location.reload();
}

function decreaseQuantity(index) {
    let cartitems = JSON.parse(localStorage.getItem('cartitems')) || [];

    if (cartitems[index].quantity > 1) {
        cartitems[index].quantity -= 1;
    }
    else {
        cartitems.splice(index, 1);
    }
    localStorage.setItem('cartitems', JSON.stringify(cartitems));
    location.reload();
}
function removeItem(index) {
    let cartitems = JSON.parse(localStorage.getItem("cartitems")) || [];
    cartitems.splice(index, 1);
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
    location.reload();
}

function clearCart() {
    localStorage.removeItem("cartitems");
    location.reload();
}

function updateCartBadge() {
    const cartCountElement = document.querySelector('.cart-count');
    const cartItems = JSON.parse(localStorage.getItem('cartitems')) || [];

    let cartCount = 0;
    for (let i = 0; i < cartItems.length; i++) {
        cartCount += Number(cartItems[i].quantity);
    }

    if (cartCountElement) {
        if (cartCount === 0) {
            cartCountElement.style.display = 'none';
        } else {
            cartCountElement.style.display = 'inline-block';
            cartCountElement.textContent = cartCount;

            // Trigger animation
            cartCountElement.classList.remove('pop-animate');
            void cartCountElement.offsetWidth; // Trigger reflow
            cartCountElement.classList.add('pop-animate');
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
});



var search = document.getElementById('search')
var prcont = document.querySelectorAll('.product-box')
console.log(prcont)
if (search) {
    search.addEventListener("keyup", function (event) {
        var enterval = event.target.value.toUpperCase();
        for (var i = 0; i < prcont.length; i++) {
            event.preventDefault();
            var prname = prcont[i].querySelector('p').textContent.toUpperCase()
            if (prname.indexOf(enterval) < 0) {
                prcont[i].style.display = 'none';
            } else {
                prcont[i].style.display = 'block';
            }
        }
    });
    search.addEventListener("keydown", function (event) {
        if (event.key === 'Enter') {
            var enterval = event.target.value.toUpperCase();
            for (var i = 0; i < prcont.length; i++) {
                event.preventDefault();
                var prname = prcont[i].querySelector('p').textContent.toUpperCase()
                if (prname.indexOf(enterval) < 0) {
                    prcont[i].style.display = 'none';
                } else {
                    prcont[i].style.display = 'block';
                }
            }
        }
    });
}



document.addEventListener('DOMContentLoaded', () => {
    var form = document.getElementById("detailForm")

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var msg = document.getElementById("msg").value;

            console.log("Form Submitted:");
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Phone:", phone);
            console.log("Message:", msg);
            alert("Your details have been Submitted ! \n Thanks for contacting Us")
        });
    }

});

