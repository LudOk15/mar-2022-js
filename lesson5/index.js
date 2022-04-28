// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let average = (arr) => {
    let s = 0;
    for (const item of arr) {
        s += item;
    }
    console.log('Середнє арифметичне', s / arr.length)
}

let num = [1, 4, 7, 12, 11]
average(num);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let sort = (arr) => {
    let sortArr = arr.sort((a, b) => a - b);
    let min = sortArr[0];
    let max = sortArr[sortArr.length - 1]
    console.log('min', min, 'max', max);
}
sort([4, 7, 12, 3, 78, 245, 8, 10]);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let
    randomArr = [];
let random = (arr) => {
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
}
random(randomArr);
console.log(randomArr);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomArr2 = [];
let random2 = (arr, limit) => {
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * limit));
    }
}
random2(randomArr2, 50);
console.log(randomArr2);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let reverse = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
        let a = arr[i];
        arr[i] = arr[arr.length - (i + 1)];
        arr[arr.length - (i + 1)] = a;
    }
}
let arr3 = [1, 2, 3, 4, 5, 6]
reverse(arr3);
console.log(arr3, '!!!');
//
//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square1 = (a, b) => a * b;
console.log(square1(2, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let square2 = (r) => 3.14 * r * r;
console.log(square2(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let square3 = (h, r) => 2 * 3.14 * r * h;
console.log(square3(3, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = (arr) => {
    for (const item of arr) {
        console.log(item);
    }
}
arr([1, 2, 3, 4, 5]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createText = (text) => document.write(`<p>${text}</p>`);
createText('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createList = (text) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createList('Hello World!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createList2 = (text, length) => {
    document.write(`<ul>`);
    for (let i = 0; i < length; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

createList2('Ukraine', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let createList3 = (arr) => {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

createList3([1, 3, 'hello', true]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29}];

let arr2 = (arr = [...{id: x, name: y, age: z}]) => {
    for (const item of arr) {
        document.write(`<div>${item.id} - ${item.name} - ${item.age}</div>`);
    }
}

arr2(users);

// - створити функцію яка повертає найменьше число з масиву
let minNum = (arr) => {
    let min = arr[0];
    for (const item of arr) {
        if (item < min) {
            min = item;
        }
    }
    console.log('мінімальне', min);
}

minNum([3, 12, 4, 25, 6, 2, 9]);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sum = (arr) => {
    let s = 0;
    for (const item of arr) {
        s += item;
    }
    console.log(s);
}

sum([10, 3, 7]);

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
let changesPlaces = (arr = [a, b]) => {
    let c = arr[0];
    arr[0] = arr[1];
    arr[1] = c;
}
let arr4 = [4, 7];
changesPlaces(arr4);
console.log(arr4, '***');
