// Скрытие кнопки при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const downloadPdfButton = document.querySelector('.download-pdf-button');
    downloadPdfButton.style.display = 'none'; 
});

function toggleFullTable() {
    const fullTable = document.querySelector('.full-table');
    const container = document.querySelector('.container');
    const downloadPdfButton = document.querySelector('.download-pdf-button');

    if (fullTable.classList.contains('active')) {
        fullTable.classList.remove('active');
        container.style.display = 'flex';
        downloadPdfButton.style.display = 'none';
    } else {
        fullTable.classList.add('active');
        container.style.display = 'none';
        downloadPdfButton.style.display = 'block';
    }
}

function toggleDownloadButton() {
    const downloadButton = document.getElementById('download-pdf-button');
    const fullTable = document.getElementById('full-table');

    if (fullTable.style.display === 'block') {
        downloadButton.style.display = 'block'; 
    } else {
        downloadButton.style.display = 'none'; 
    }
}

function showTab(index) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach((tab, i) => {
        if (i === index) {
            tab.classList.add('active');
            contents[i].classList.add('active');
        } else {
            tab.classList.remove('active');
            contents[i].classList.remove('active');
        }
    });
}

  // Добавление обработчика события для кнопки
const refreshButton = document.getElementById('refresh-button');

refreshButton.addEventListener('click', () => {
    location.reload(); 
});


// Маска для телефона
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('focus', () => {
    let value = phoneInput.value.replace(/\D/g, ''); 
    if (!value || value[0] !== '7') {
    phoneInput.value = '+7 ';
    }
});

phoneInput.addEventListener('input', (e) => {
    let value = phoneInput.value.replace(/\D/g, '');

    if (value.startsWith('8')) value = '7' + value.slice(1);

    let formattedValue = '+7 ';
    if (value.length > 1) formattedValue += `(${value.slice(1, 4)}`;
    if (value.length >= 5) formattedValue += `) ${value.slice(4, 7)}`;
    if (value.length >= 8) formattedValue += `-${value.slice(7, 9)}`;
    if (value.length >= 10) formattedValue += `-${value.slice(9, 11)}`;

    phoneInput.value = formattedValue;
});


// Маска для ИНН
const innInput = document.getElementById('inn');

innInput.addEventListener('input', (e) => {

let value = innInput.value.replace(/\D/g, '');

if (value.length > 12) {
    value = value.slice(0, 12);
}

innInput.value = value;
});


// Маска для СНИЛС
const snilsInput = document.getElementById('snils');

snilsInput.addEventListener('input', () => {
let value = snilsInput.value.replace(/\D/g, ''); 

if (value.length > 11) {
    value = value.slice(0, 11);
}

if (value.length > 3) value = value.slice(0, 3) + '-' + value.slice(3);
if (value.length > 7) value = value.slice(0, 7) + '-' + value.slice(7);
if (value.length > 11) value = value.slice(0, 11) + ' ' + value.slice(11);

snilsInput.value = value;
});


// Маска для Паспорта
const passportInput = document.getElementById('passport');

passportInput.addEventListener('input', () => {
let value = passportInput.value.replace(/\D/g, ''); 

if (value.length > 10) {
    value = value.slice(0, 10);
}

if (value.length > 2) value = value.slice(0, 2) + ' ' + value.slice(2);
if (value.length > 5) value = value.slice(0, 5) + ' ' + value.slice(5);

passportInput.value = value;
});


// Маска для Вод.прав
const driverLicense = document.getElementById('driverLicense');

driverLicense.addEventListener('input', () => {
let value = driverLicense.value.replace(/\D/g, ''); 

if (value.length > 10) {
    value = value.slice(0, 10);
}

if (value.length > 2) value = value.slice(0, 2) + ' ' + value.slice(2);
if (value.length > 5) value = value.slice(0, 5) + ' ' + value.slice(5);

driverLicense.value = value;
});driverLicense


// Маска для VIN
const vinInput = document.getElementById('vin');

vinInput.addEventListener('input', () => {
let value = vinInput.value.toUpperCase(); 

if (value.length > 17) {
    value = value.slice(0, 17);
}

vinInput.value = value;
});
