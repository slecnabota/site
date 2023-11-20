window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function openMenu(){
    const menu = document.querySelector(".header__menu");
    menu.classList.toggle("active")
}

// window.addEventListener("scroll", function () {
//   var header = document.querySelector(".header");

//   if (window.scrollY > 0) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });
// const arrowBurger = document.querySelector(".burger");
// const bodyBurger = document.querySelector(".header__mobile");
// if (arrowBurger) {
//   arrowBurger.addEventListener("click", function (e) {
//     document.body.classList.toggle("lock");
//     arrowBurger.classList.toggle("active");
//     bodyBurger.classList.toggle("active");
//   });
// }
// function openPop() {
//   let op = document.getElementById("op");
//   op.classList.toggle("active");
// }
// const links = document.querySelectorAll(".links a");
// links.forEach((link) => {
//   link.addEventListener("click", closeLink);
// });
// function closeLink() {
//   document.body.classList.toggle("lock");
//   arrowBurger.classList.toggle("active");
//   bodyBurger.classList.toggle("active");
// }
