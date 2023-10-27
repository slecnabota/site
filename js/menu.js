const arrowBurger = document.querySelector('.header__menu');
const bodyBurger = document.querySelector('.header__mobile');
arrowBurger.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    arrowBurger.classList.toggle('active');
    bodyBurger.classList.toggle('active');
});
function closeLink(){
    document.body.classList.toggle('lock');
    arrowBurger.classList.toggle('active');
    bodyBurger.classList.toggle('active');
}
function openThis(){
    const thislinks = document.querySelector('.header__mobile-content');
    thislinks.classList.toggle('active');
    document.querySelector("#btn").classList.toggle('transform');
}