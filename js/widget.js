// document.addEventListener("DOMContentLoaded", function () {
//   const phoneIcon = document.getElementById("phoneIcon");
//   const contactOptions = document.getElementById("contactOptions");
//   const whatsappIcon = document.querySelector(".whatsapp-icon");
//   const phoneCallIcon = document.querySelector(".phone-call-icon");
//   const phoneBack = document.getElementById("phoneBack")

//   phoneBack.addEventListener("click", function () {
//     if (phoneIcon.classList.contains("active")) {
//       phoneIcon.classList.remove("active");
//       phoneBack.classList.remove("animate")
//       contactOptions.classList.remove("active");
//       contactOptions.style.display = "none";
//       phoneIcon.classList.add("reverse-animation");
//       setTimeout(() => {
//         phoneIcon.classList.remove("reverse-animation");
//       }, 300); // Время, соответствующее времени анимации в CSS
//     } else {
//       phoneIcon.classList.add("active");
//       phoneBack.classList.add("animate")
//       contactOptions.style.display = "block";
//       setTimeout(function () {
//         whatsappIcon.classList.add("active");
//       }, 100); // Задержка перед появлением WhatsApp иконки
//       setTimeout(function () {
//         phoneCallIcon.classList.add("active");
//       }, 200); // Задержка перед появлением иконки звонка
//       setTimeout(function () {
//         contactOptions.classList.add("active");
//       }, 300); // Задержка для плавной анимации появления всех иконок
//     }
//   });
// });
