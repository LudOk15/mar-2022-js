// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//  Вивести кожну змінну за допомогою: console.log , alert, document.write
let a1 = 'hello'
let a2 = 'owu'
let a3 = 'com'
let a4 = 'ua'
let a5 = 1
let a6 = 10
let a7 = -999
let a8 = 123
let a9 = 3.14
let a10 = 2.7
let a11 = 16
let a12 = true
let a13 = false
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);
console.log(a11);
console.log(a12);
console.log(a13);
document.write(`<p>${a1}</p>`)
document.write(`<p>${a2}</p>`)
document.write(`<p>${a3}</p>`)
document.write(`<p>${a4}</p>`)
document.write(`<p>${a5}</p>`)
document.write(`<p>${a6}</p>`)
document.write(`<p>${a7}</p>`)
document.write(`<p>${a8}</p>`)
document.write(`<p>${a9}</p>`)
document.write(`<p>${a10}</p>`)
document.write(`<p>${a11}</p>`)
document.write(`<p>${a12}</p>`)
document.write(`<p>${a13}</p>`)
alert(a1)
// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
let book = {
    title: 'One life',
    pages: 245,
    genre: 'fantasy'
}
// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)
let book2 = {
    title: 'One life',
    pages: 288,
    genre: 'fantasy',
    authors: [
        'autor1',
        'autor2',
        'autor3'
    ]
}
console.log(book2);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Lyudmyla'
let middleName = 'Bohdanivna'
let lastName = 'Shpytko'
let person = firstName + ' ' + middleName + ' ' + lastName
console.log(person);
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let fn = prompt('Введіть своє ім\'я')
let mn = prompt('Введіть по-батькові')
let age = prompt('Скільки вам років?')
let person2 = `${fn} ${mn} - ${age}`
console.log(person2);
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
// - Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books = [
    {title: 'book1', pages: 123, genre: 'fantasy', authors: ['autor1', 'autor2', 'autor3']},
    {title: 'book2', pages: 456, genre: 'drama', authors: ['autor1', 'autor2', 'autor3']},
    {title: 'book3', pages: 789, genre: 'romans', authors: ['autor1', 'autor2', 'autor3']}
]
console.log(books[0])
console.log(books[1]);
console.log(books[2]);