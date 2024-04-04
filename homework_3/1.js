// ## Задание 1

// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// **Страница добавления отзыва:**

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// **Страница просмотра отзывов:**

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

document.addEventListener("DOMContentLoaded", () => {

    // Функция, которая преобразует отзывы, хранящиеся в localStorage в массив отзывов,
    // если отзывы отсутствуют, то возвращает пустой массив
    const parseIntoArray = (key) => {
        const savedReviews = localStorage.getItem(key);
        if (savedReviews) {
            return JSON.parse(savedReviews);
        }
        return [];
    }

    // Показать на странице отзывы, сохраненные в localStorage
    const displayProductsWithReviews = () => {
        document.querySelector('.box-reviews').innerHTML = "";
        for (let i = 0; i < localStorage.length; i++) {
            const boxReviews = document.querySelector('.box-reviews');

            // Создать элемент details для отображения раскрвыающегося списка отзывов
            const details = document.createElement('details');
            const summary = document.createElement('summary');
            summary.textContent = localStorage.key(i);
            details.appendChild(summary);
            const ul = document.createElement('ul');

            // Добавляем элементы списка
            const reviews = parseIntoArray(localStorage.key(i));
            reviews.forEach(review => {
                const li = document.createElement('li');
                li.textContent = review;
                // Добавление кнопки удаления
                const removeBtn = document.createElement('button');
                element.setAttribute("id", "newElementId");
                removeBtn.textContent = 'Удалить отзыв';
                li.appendChild(removeBtn);
                ul.appendChild(li);
            });
            details.appendChild(ul);
            boxReviews.appendChild(details);
        }
    }


    displayProductsWithReviews(); // Загрузка отзывов при открытии страницы

    // Добавление отзыва
    document.querySelector('.addReview').addEventListener('click', () => {
        // В качестве ключа в localStorage получаем value (product) из тега option
        const product = document.querySelector(".products").value;
        const rewiew = document.querySelector(".reviewInput").value.trim();
        if (rewiew.length < 10 || rewiew.length > 500) {
            throw new Error("Длина отзыва должна быть от 10 до 500 символов.");
        }
        // Для каждого продукта в localStorage создаем массив отзывов
        const arrOfRewiews = parseIntoArray(product);
        // Добавляем новый отзыв в localStorage
        arrOfRewiews.push(rewiew);
        localStorage.setItem(product, JSON.stringify(arrOfRewiews));
        // Обновить выводимые на экран отзывы, при добавлении нового отзыва
        displayProductsWithReviews();
    });

    // Удаление отзыва
    // Не разобрался, как правильно удалять отзывы при такой реализации

})

