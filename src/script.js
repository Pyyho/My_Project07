const form = document.getElementById('ContactForm'); /* получаем элемент форм */
const emailInput = document.getElementById('email'); /* получаем элемент форм email */
const phoneInput = document.getElementById('phone');

emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);

function validateEmail() { /* функция проверки коррект email */

    const emailRegex = /[A-Za-z0-9_\-\.]{2,10}@[a-z0-9\.\-_]{1,10}\.[a-z]{2,3}/;
    if(emailRegex.test(emailInput.value)) // если введенный пользователем email не подходит
    {
        removeError(emailInput); //убираем ошибку
        return true;
    }

    else
    {
        showError(emailInput, "Email не соответсвует формату. Пример: invanov@mail.ru");
        return false;
    }
}

phoneInput.addEventListener('input', validatePhone);

phoneInput.setAttribute('pattern', '^\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}$');

function validatePhone() { 

    const digits = phoneInput.value.replace(/\D/g,'').slice(0,11); // до 11 цифр
    const d = digits.replace(/^8/, '7'); // нормализуем 8

    const parts = [];
    if (d.length > 0) parts.push('+7');
    if (d.length > 1) parts.push(' (' + d.slice(1,4));
    if (d.length >= 4) parts[parts.length - 1] += ')';
    if (d.length >= 5) parts.push(' ' + d.slice(4,7));
    if (d.length >= 8) parts.push('-' + d.slice(7,9));
    if (d.length >= 10) parts.push('-' + d.slice(9,11));

    phoneInput.value = parts.join('');

    const phonePattern = new RegExp(phoneInput.getAttribute('pattern'));
    
    if(phonePattern.test(phoneInput.value)) 
    {
        removeErrorPhone(phoneInput); //убираем ошибку
        return true;
    }

    else
    {
        showErrorPhone(phoneInput, "Введенный вами телефон не соответсвует формату. Пример: +7 123 456 78 90");
        return false;
    }
}



function showError(input, message) {  /* функция показа ошибки */
    const formControl = input.parentElement; //получение родительской формы
    // ищем сущ ошибки
    const errorElement = formControl.querySelector('.error') || document.createElement('div');

    errorElement.className = 'error'; // CSS- стиль для блок ошибки
    errorElement.textContent = message; // задаем сообщение об ошибке из параметра функции
    
    formControl.appendChild(errorElement); // добовляем компонент ошибку из форм
    input.style.borderColor = 'red'; // делаем красная обводка поля с ошибкой
}


function removeError(input) {  /* функция исправления ошибки */

    const formControl = input.parentElement; //получение родительской формы
    const errorElement = formControl.querySelector('.error'); // ищем существующей блок ошибки

    if(errorElement) // Если оштбка найдена
    {
        formControl.removeChild(errorElement); // удаляем блок с ошибкой
    }

    input.style.borderColor = 'green'; // задаем зеленый цвет обводки
}



function showErrorPhone(input, message) {  /* функция показа ошибки */
    const formControl = input.parentElement; //получение родительской формы
    // ищем сущ ошибки
    const errorElement = formControl.querySelector('.error') || document.createElement('div');

    errorElement.className = 'error'; // CSS- стиль для блок ошибки
    errorElement.textContent = message; // задаем сообщение об ошибке из параметра функции
    
    formControl.appendChild(errorElement); // добовляем компонент ошибку из форм
    input.style.borderColor = 'red'; // делаем красная обводка поля с ошибкой
}

function removeErrorPhone(input) {  /* функция исправления ошибки */

    const formControl = input.parentElement; //получение родительской формы
    const errorElement = formControl.querySelector('.error'); // ищем существующей блок ошибки

    if(errorElement) // Если оштбка найдена
    {
        formControl.removeChild(errorElement); // удаляем блок с ошибкой
    }

    input.style.borderColor = 'green'; // задаем зеленый цвет обводки
}

