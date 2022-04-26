// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +prompt('Введіть число')
x !== 0 ? console.log('Вірно') : console.log('Невірно')
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('Введіть число від 0 до 59')
if (time >= 0 && time <= 15) {
    console.log('I path');
} else if (time >= 15 && time <= 30) {
    console.log('II path');
} else if (time >= 30 && time <= 45) {
    console.log('III path');
} else if (time >= 45 && time <= 60) {
    console.log('IV path');
} else {
    console.log('Не коректно введене число')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Введіть число від 1 до 31')
if (day >= 1 && day <= 11) {
    console.log('decade 1');
} else if (day > 11 && day <= 20) {
    console.log('decade 2');
} else if (day > 20 && day <= 31) {
    console.log('decade 3');
} else {
    console.log('???????');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
switch (+prompt('enter day number')) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:

        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;

    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('enter day number')
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = +prompt('Введіть число')
let b = +prompt('Введіть число')
if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
} else if (a === b) {
    console.log(`a=b=${a}`)
}