const form = document.getElementById('ContactForm') /* получаем элемент форм */
const emailInput = document.getElementById('email') /* получаем элемент форм email */

emailInput.addEventListener('inpur', validateEmail);

function validateEmail() { /* функция проверки коррект email */
    const emailRegex = /[A-Za-z0-9_\-\.]{2,10}@[a-z0-9\.\-_]{1,10}\.[a-z]{2,3}/;
    if(emailRegex.text(emailInput.value)) // если введенный пользователем email не подходит
    {
        removeError(emailInput); //убираем ошибку
        return true;
    }

    else{
        showError(emailInput, "Email не соответсвует формату. Пример: invanov@mail.ru");
        return false;
    }
}

function showError(input, messege) {  /* функция показа ошибки */
    const formControl = input.parantElement; //получение родительской формы
    // ищем сущ ошибки
    const errorRlrmrnt = formControl.querySelector('error') || document.createElement('div');

    errorElement.class = 'error'; // CSS- стиль для блок ошибки
    errorElement.textContent = messege; // задаем сообщение об ошибке из параметра функции
    
    formControl.appendChild(errorElement); // добовляем компонент ошибку из форм
    input.style.borderColor = 'red'; // делаем красная обводка поля с ошибкой
}

function removeError(input) {  /* функция исправления ошибки */
    const formControl = input.parantElement; //получение родительской формы
    const errorElement = formControl.querySelector('error'); // ищем существующей блок ошибки

    if(errorElement) // Если оштбка найдена
    {
        formControl.removeChild(errorElement); // удаляем блок с ошибкой
    }

    input.style.borderColor = 'green'; // задаем зеленый цвет обводки
}