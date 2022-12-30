let checkCart = document.getElementById('check-cart');
let checkPos = checkCart.getBoundingClientRect().height;
console.log(checkPos)
window.addEventListener("scroll", function (e) {
    let scrollPos = window.scrollY;
    console.log(scrollPos,checkPos)
    if(scrollPos >= checkPos*2 ) {
        checkCart.style.opacity = "0";
    } else {
        checkCart.style.opacity = "1";
        checkCart.style.transition = "opacity 0.3s"
    }
})

