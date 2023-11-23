function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function displayFileName() {
  // Получаем элементы
  var input = document.getElementById("custom-file-input");
  var label = document.getElementById("custom-file-label");
  var fileSelected = document.getElementById("file-selected");

  // Показываем имя выбранного файла
  fileSelected.textContent = "Выбран файл: " + input.files[0].name;

  // Скрытие стандартной надписи
  label.style.display = "none";
}

function openInfo(infoId) {
  if (window.innerWidth < 1024) {
    let infoElement = document.getElementById(`info${infoId}`);

    if (infoElement.classList.contains("active")) {
      infoElement.classList.remove("active");
    } else {
      infoElement.classList.add("active");
    }
  }
}
function openProject(infoId) {
    // Получить выбранную карточку
    let infoElement = document.getElementById(`info${infoId}`);
  
    // Проверить, содержит ли выбранная карточка класс "active"
    if (infoElement.classList.contains("active")) {
      // Если содержит, то закрыть карточку
      infoElement.classList.remove("active");
    } else {
      // Если не содержит, то закрыть все карточки и открыть выбранную
      let allCards = document.querySelectorAll('.project-block__card-inner');
      allCards.forEach(card => {
        card.classList.remove("active");
      });
  
      infoElement.classList.add("active");
    }
  }
  
  
