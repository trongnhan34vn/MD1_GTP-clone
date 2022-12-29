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

// let opacity = 1;
// let decreaseOpacity = 0.1;

// window.addEventListener('scroll',function () {
//     hideCheckCart();
// })
// function hideCheckCart() {
//    // let id = requestAnimationFrame(hideCheckCart)
//    //  checkCart.style.opacity = parseInt(checkCart.style.opacity) - decreaseOpacity
//    //  if (opacity <= 0) {
//    //      cancelAnimationFrame(id)
//    //  }
//     console.log("hello")
// }
// checkCart.style.opacity = "0";
// console.log( checkCart.style.opacity)