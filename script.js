var sn = document.querySelector('.side-navbar')
function addSN() {
    sn.style.left = '0%'
}
function closeSN() {
    sn.style.left = '-70%'
}


cart = document.querySelector('.cart-container')
if (cart.textContent === '') {
    cart.innerHTML = "<center><h1>Cart is empty<i class='fa-solid fa-cart-shopping'></i></h1><center><p>There is nothing in your bag. Let's add some items.</p> <a href='collection.html'>Add items to Cart</a>"
    cart.setAttribute('class', 'emptycart');
}

function addtocart(element) {
    cart.classList.remove('.emptycart');
}





var search = document.getElementById('search')
var prcont = document.querySelectorAll('.product-box')
console.log(prcont)
if (search){search.addEventListener("keyup", function (event) {
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
    if (event.key==='Enter'){
    var enterval = event.target.value.toUpperCase();
    for (var i = 0; i < prcont.length; i++) {
        event.preventDefault();
        var prname = prcont[i].querySelector('p').textContent.toUpperCase()
        if (prname.indexOf(enterval) < 0) {
            prcont[i].style.display = 'none';
        } else {
            prcont[i].style.display = 'block';
        }
    }}
});}



document.addEventListener('DOMContentLoaded', ()=>{
    var form = document.getElementById("detailForm")

    if (form){
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

