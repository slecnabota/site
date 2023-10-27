function openModal(){
    document.querySelector("#modal").classList.toggle('active');
}
function closeModal(){
    document.querySelector("#modal").classList.toggle('active');
}
window.onclick = function(event) {
    if (event.target == document.querySelector("#modal")) {
        document.querySelector("#modal").classList.toggle('active');
    }
  }