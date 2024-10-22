const images = [
    'images/captcha1.jpg', // Например, это правильное изображение
    'images/captcha2.jpg',
    'images/captcha3.jpg',
    'images/captcha4.jpg',
    'images/captcha5.jpg',
    'images/captcha6.jpg'
];

// Укажите индекс правильного изображения (например, 4 для 'image5.jpg')
const correctImageIndex = 4; // Задайте здесь индекс правильного изображения
let shuffledImages = [];
let attempts = 0; // Счетчик попыток
const maxAttempts = 5; // Максимальное количество попыток

// Функция для создания капчи
function createCaptcha() {
    // Скрываем основной контент
    const mainContent = document.getElementById('slider');
    if (mainContent) {
        mainContent.style.display = 'none';
    }

    // Удаляем предыдущую капчу, если она существует 
    const existingCaptchaContainer = document.getElementById('captcha-container');
    if (existingCaptchaContainer) {
        existingCaptchaContainer.remove();
    }

    // Создаем новый контейнер для капчи
    const captchaContainer = document.createElement('div');
    captchaContainer.id = 'captcha-container';
    captchaContainer.style.backgroundColor = 'rgba(50, 255, 255, 0.9)'; // Темный фон
    captchaContainer.style.color = 'black';
    captchaContainer.style.display = 'flex';
    captchaContainer.style.flexDirection = 'column';
    captchaContainer.style.alignItems = 'center';
    captchaContainer.style.justifyContent = 'center';
    captchaContainer.style.height = '100vh';
    document.body.appendChild(captchaContainer);

    const title = document.createElement('h2');
    title.textContent = 'выберити картинку прямоугольника чтобы попасть в слайдер';
    captchaContainer.appendChild(title);

    // Перемешиваем изображения 
    shuffledImages = shuffleArray([...images]);

    // Находим индекс правильного изображения в перемешанном массиве 
    const correctImage = images[correctImageIndex];
    const correctImageNewIndex = shuffledImages.indexOf(correctImage);

    const imagesContainer = document.createElement('div');
    imagesContainer.style.display = 'flex';
    imagesContainer.style.flexWrap = 'wrap';
    imagesContainer.style.justifyContent = 'center';

    shuffledImages.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = 'Картинка';
        imgElement.style.width = '150px';
        imgElement.style.height = '150px';
        imgElement.style.margin = '100px';
        imgElement.style.cursor = 'pointer';
        imgElement.style.border = '2px solid transparent';

        imgElement.addEventListener('mouseover', () => {
            imgElement.style.border = '10px solid red';
        });

        imgElement.addEventListener('mouseout', () => {
            imgElement.style.border = '2px solid transparent';
        });

        imgElement.addEventListener('click', () => checkAnswer(index, correctImageNewIndex));

        imagesContainer.appendChild(imgElement);
    });

    captchaContainer.appendChild(imagesContainer);
    const message = document.createElement('div');
    message.id = 'message';
    captchaContainer.appendChild(message);
}

// Функция для проверки ответа
function checkAnswer(selectedIndex, correctImageIndex) {
    const message = document.getElementById('message');
    attempts++; // Увеличиваем счетчик попыток

    if (selectedIndex === correctImageIndex) {
        disableCaptcha()

        // Удаляем капчу через 1 секунду
        setTimeout(() => {
            const captchaContainer = document.getElementById('captcha-container');
            if (captchaContainer) {
                captchaContainer.style.display = 'none'; // Скрываем капчу 
                }
            const mainContent = document.getElementById('slider');
            if (mainContent) {
                mainContent.style.display = 'block'; // Показываем основной контент
            }
        }, 500);
    } else {
        message.textContent = 'Неправильно, попробуйте снова.';
        message.style.color = 'red';
        // Если превышено максимальное количество попыток
        if (attempts >= maxAttempts) {
        } else {
            // Обновляем капчу 
            setTimeout(() => {
                createCaptcha();
            }, 500); // Задержка перед обновлением капчи
        }
    }
}

// Функция для отключения капчи
function disableCaptcha() {
    const captchaContainer = document.getElementById('captcha-container');
    if (captchaContainer) {
        captchaContainer.style.pointerEvents = 'none'; // Блокируем взаимодействие
    }
}

// Функция для перемешивания массива
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Меняем местами
    }
    return array;
}

createCaptcha();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    let currentIndex = 0;
    
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    function showSlide(index) {
        const offset = -index * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Автопрокрутка каждые 3 секунды

    
// Массив с изображениями
