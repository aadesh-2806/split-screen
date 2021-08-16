var side1 = document.querySelector('#side1');
var side2 = document.querySelector('#side2');

window.addEventListener('scroll' , function () {
    side1.style.left = -window.pageYOffset + 'px'
    side2.style.left = window.pageYOffset + 'px'
})