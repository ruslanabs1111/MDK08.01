function getInfo() {
    const model = document.getElementById('model').value.toLowerCase();
    let generationInfo = '';

    switch (model) {
        case 'eniac':
            generationInfo = 'Модель: ENIAC. Поколение: 1. Годы выпуска: 1945. Элементная база: лампы и реле.';
            break;
        case 'ibm 1401':
            generationInfo = 'Модель: IBM 1401. Поколение: 2. Годы выпуска: 1959. Элементная база: транзисторы.';
            break;
        case 'ibm 7090':
            generationInfo = 'Модель: IBM 7090. Поколение: 3. Годы выпуска: 1960. Элементная база: транзисторы.';
            break;
        case 'ibm 360':
            generationInfo = 'Модель: IBM 360. Поколение: 3. Годы выпуска: 1964. Элементная база: интегральные схемы.';
            break;
        case 'dec pdp-8':
            generationInfo = 'Модель: DEC PDP-8. Поколение: 3. Годы выпуска: 1965. Элементная база: транзисторы.';
            break;
        case 'ibm pc':
            generationInfo = 'Модель: IBM PC. Поколение: 4. Годы выпуска: 1981. Элементная база: микропроцессоры Intel 8088.';
            break;
        case 'apple 2':
            generationInfo = 'Модель: Apple II. Поколение: 2. Годы выпуска: 1977. Элементная база: микропроцессоры MOS Technology 6502.';
            break;
        case 'ibm 5170':
            generationInfo = 'Модель: IBM 5170. Поколение: 4. Годы выпуска: 1984. Элементная база: микропроцессоры Intel 80286.';
            break;
        case 'macintosh 128k':
            generationInfo = 'Модель: Macintosh 128K. Поколение: 4. Годы выпуска: 1984. Элементная база: микропроцессоры Motorola 68000.';
            break;
        default:
            generationInfo = 'Информация о модели не найдена.';
    }

    const authorInfo = 'Автор сайта: Абсалямов Р.Р.';
    // Объединяем информацию об ЭВМ и авторе
    document.getElementById('result').innerText = generationInfo + '\n\n' + authorInfo;
}