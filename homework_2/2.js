// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы,
// но чтобы исключить слишком короткие или слишком длинные сообщения,
// вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером,
// где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами.
// Однако если длина введенного отзыва менее 50 или более 500 символов,
// функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

// const initialData = [
//     {
//         product: "Apple iPhone 13",
//         reviews: [
//             {
//                 id: "1",
//                 text: "Отличный телефон! Батарея держится долго.",
//             },
//             {
//                 id: "2",
//                 text: "Камера супер, фото выглядят просто потрясающе.",
//             },
//         ],
//     },
//     {
//         product: "Samsung Galaxy Z Fold 3",
//         reviews: [
//             {
//                 id: "3",
//                 text: "Интересный дизайн, но дорогой.",
//             },
//         ],
//     },
//     {
//         product: "Sony PlayStation 5",
//         reviews: [
//             {
//                 id: "4",
//                 text: "Люблю играть на PS5, графика на высоте.",
//             },
//         ],
//     },
// ];

// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

function addReview() {
    const reviewInput = document.getElementById("reviewInput").value;
    if (reviewInput.length < 50 || reviewInput.length > 500) {
        throw new Error("Длина отзыва должна быть от 50 до 500 символов.");
    }

    const reviewsContainer = document.getElementById("reviewsContainer");
    const newReview = document.createElement("p");
    newReview.textContent = reviewInput;
    reviewsContainer.appendChild(newReview);
}

initialData.forEach((item) => {
    const reviewsContainer = document.getElementById("reviewsContainer");
    const productReviews = item.reviews;
    productReviews.forEach((review) => {
        const newReview = document.createElement("p");
        newReview.textContent = review.text;
        reviewsContainer.appendChild(newReview);
    });
});
