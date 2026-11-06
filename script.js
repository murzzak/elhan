document.addEventListener('DOMContentLoaded', () => {
    
    // ------------------------------------------
    // Функция 1: Мобильное гамбургер-меню
    // ----------------------------------------------
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');

    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // ------------------------------------------------
    // Функция 2: Переключение темы (Светлая / Темная)
    // -------------------------------------------------
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            themeToggleBtn.textContent = '☀️';
        } else {
            themeToggleBtn.textContent = '🌙';
        }
    });

    // ----------------------------------
    // Функция 3: Валидация полей формы обратной связи
    // ----------------------------------
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Отменяем отправку формы браузером по умолчанию

        let isValid = true;

        const nameInput = document.getElementById('userName');
        const emailInput = document.getElementById('userEmail');
        const messageInput = document.getElementById('userMessage');

        // Проверка длины имени
        if (nameInput.value.trim().length < 2) {
            nameInput.parentElement.classList.add('error');
            isValid = false;
        } else {
            nameInput.parentElement.classList.remove('error');
        }

        // Проверка корректности формата Email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailInput.value.match(emailPattern)) {
            emailInput.parentElement.classList.add('error');
            isValid = false;
        } else {
            emailInput.parentElement.classList.remove('error');
        }

        // Проверка наличия текста сообщения
        if (messageInput.value.trim() === '') {
            messageInput.parentElement.classList.add('error');
            isValid = false;
        } else {
            messageInput.parentElement.classList.remove('error');
        }

        // Вывод сообщения при успешном прохождении валидации
        if (isValid) {
            successMessage.style.display = 'block';
            contactForm.reset();
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
    });
});

// ----------------------------------------------------
// Функция 4: Фильтрация карточек проектов по категориям
// ----------------------------------------------------
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Переключаем активное состояние кнопок
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Фильтруем карточки по атрибуту data-category
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}