// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square1(a, b) {
    return a * b
}

console.log(square1(2, 4))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function square2(r) {
    return 3.14 * r ** 2
}

console.log(square2(3))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function square3(h, r) {
    return 2 * 3.14 * r * h
}

console.log(square3(3, 2))

// - створити функцію яка приймає масив та виводить кожен його елемент
function arr(arr) {
    for (const item of arr) {
        console.log(item)
    }
}

arr([1, 2, 3, 4, 5])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createText(text) {
    document.write(`<p>${text}</p>`)
}

createText('Hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList(text) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

createList('Hello World!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createList2(text, length) {
    document.write(`<ul>`)
    for (let i = 0; i < length; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

createList2('Ukraine', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createList3(arr) {
    document.write(`<ul>`)
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

createList3([1, 3, 'hello', true])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

function arr2(arr = [...{id, name, age}]) {
    for (const item of arr) {
        document.write(`<div>${item}</div>`)
    }
}

arr2(listOfItems)

// - створити функцію яка повертає найменьше число з масиву
function minNum(arr) {
    let min = arr[0];
    for (const item of arr) {
        if (item < min) {
            min = item
        }
    }
    console.log('мінімальне', min)
}

minNum([3, 12, 4, 25, 6, 2, 9])

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sum(arr) {
    let s = 0
    for (const item of arr) {
        s += item
    }
    console.log(s)
}

sum([10, 3, 7])