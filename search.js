
var search = document.getElementById('search')
var prcont = document.querySelectorAll('.product-box')
console.log(prcont)
search.addEventListener("keyup", function (event) {
    var enterval = event.target.value.toUpperCase();
    for (var i = 0; i < prcont.length; i++) {
        var prname = prcont[i].querySelector('p').textContent.toUpperCase()
        if (prname.indexOf(enterval) < 0) {
            prcont[i].style.display = 'none';
        } else {
            prcont[i].style.display = 'block';
        }
    }

});