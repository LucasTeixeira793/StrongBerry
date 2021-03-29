/* 
!Temporary 
*/
setTimeout(function () {
    $(".loader_bg").fadeToggle();
}, 1500);
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
