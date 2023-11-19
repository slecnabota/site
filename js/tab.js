const itemsPerPage = 12; // Количество карточек на одной странице
let currentPage = 1; // Текущая страница
let currentFilter = 'all'; // Текущий фильтр

function hideAllCards() {
    const cards = document.querySelectorAll('.item');
    cards.forEach(card => card.style.display = 'none');
}

function showCardsByType(type, page) {
    const cards = document.querySelectorAll('.item');
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    let count = 0;

    cards.forEach((card, index) => {
        if (card.classList.contains(type) || type === 'all') {
            if (count >= startIndex && count < endIndex) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
            count++;
        } else {
            card.style.display = 'none';
        }
    });
}

function updatePagination() {
    const cards = document.querySelectorAll('.item');
    const filteredCards = Array.from(cards).filter(card => card.classList.contains(currentFilter) || currentFilter === 'all');
    const totalPages = Math.ceil(filteredCards.length / itemsPerPage); // Calculate total pages based on filtered cards

    const pagination = document.getElementById('pagination');

    if (totalPages <= 1) {
        pagination.style.display = 'none'; // Скрываем пагинацию, если страница не нужна
        return; // Выходим из функции, чтобы не создавать пустую пагинацию
    }

    let paginationHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const isActive = i === currentPage ? 'active' : ''; // Проверяем, активна ли страница
        paginationHTML += `<button class="page-link ${isActive}" onclick="changePage(${i})">${i}</button>`;
    }

    pagination.style.display = 'flex'; // Показываем пагинацию, если нужно
    pagination.innerHTML = paginationHTML;
}


// Создайте функцию для изменения текущей страницы
function changePage(page) {
    currentPage = page;
    showCardsByType(currentFilter, currentPage);
    updatePagination();
}

// Функция для обработчиков событий кнопок фильтрации
function filterButtonClickHandler(filterType) {
    currentFilter = filterType;
    currentPage = 1;
    hideAllCards();
    showCardsByType(currentFilter, currentPage);
    updatePagination();

    // Удаление класса "active" у всех кнопок и добавление его к текущей
    document.querySelectorAll('.main-filter button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.${filterType}`).classList.add('active');
    // 
    const newUrl = window.location.pathname + `?filter=${currentFilter}`;
    window.history.pushState({}, '', newUrl);

    // Удаление класса "active" у всех кнопок и добавление его к текущей
    document.querySelectorAll('.main-filter button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.${filterType}`).classList.add('active');
}

document.querySelectorAll('.main-filter button').forEach(button => {
    button.addEventListener('click', () => filterButtonClickHandler(button.classList[0]));
});
// Функция для извлечения параметров из URL
function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Функция для фильтрации карточек на странице каталога
function filterCardsByParameter() {
    const filterParam = getUrlParameter('filter');
    if (filterParam) {
        filterButtonClickHandler(filterParam);
    }
}

// Вызов функции для фильтрации карточек при загрузке страницы
filterCardsByParameter();

// По умолчанию показываем все карточки
hideAllCards();
showCardsByType(currentFilter, currentPage);
filterCardsByParameter(); // Вызов после определения getUrlParameter
updatePagination();

