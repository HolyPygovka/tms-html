/*let data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
}
, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }
    , {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
];



let name = prompt ('Введите Фамилию', '');
let ourName = "НЕТ"


for (let i=0; i < data.length; i++ ){
    if (name === data[i].lastName) {
        ourName = `Name: ${data[i].firstName} Lastname: ${data[i].lastName} Age: ${data[i].age}`

    }

}
console.log(ourName)*/

                                                //Lesson 3//

/*
a = 2 - простой объект
b = {} - объект
объекты присваиваются ввиде ссылки, т.е, если менять часть объекта, в любой другой переменной этого объекта произойдут изменения
null - пусто, ничего нет
undefined - пустая переменная
логические операторы - >, <, =
условные операторы - if
- циклы do while, while, for
x = {
key: object - свойство объекта
}
                                                 Функции Js

Для объявления функции необходим воспользоваться:
1. Function
2. Имя функции(как переменная)
3. Скобки с параметрами
4. Тело функции

 */
/*function sum(a, b) {
    let x = a+b;
    alert(x) }

    function sum2(a, b, c){
    let z = a+c
        let y = c-b
        console.log(z,y)
    }

    sum2(3,5,10);
*/
/*
инкапсулирование: function getData(...) {
    let name = "vasya" - только для этой функции
    let x = a - если а нет в этой функции она спросит ее выше

}
*/
/*
let name = 'vasya'; - глобальная переменная, она видна всем функциям
function showMessage (...) {
name = 'oleg';}
console.log(name)
showMessage()
console.log(name)
 */

/*

 */
/*
function summ( a,b) {
    return a+b;

}
let x = summ(2, 3)
alert(x)
 */
/*
function doCalc(a , b, c){
    return (a+b)/c;
}

let x = doCalc(5,10,5);

console.log(x);
 */

/*                                                          Методы массива
.split - конвертирует строку в массив, разбивает по параметру(строка), которая передается внутри скобок
.join - конвертирует строку из массива, разделяет элементы массива символом, который указан в параметре
.splice(index, [deleteCount, pasteElement]) - позволяет вырезать элементы массива. В отличие от директивы delete остальные элементы массива сдвигаются
.slice -(index, copyCount) - копирует элементы массива
.reverse -() - переворачивает массив
.concat - позволяет добавить в массив новые элементы
.indexOf - возвращает порядковый номер искомого элемента в массиве (сравнение происходит по содержимому и типу), если искомый элемент в массиве отсутсвует, вернет -1
 */
/*
let str = `Собака спиздила сосиску`
let arr = str.split(" ")
console.log(arr)
let newarr = arr.join("-")
console.log(newarr)
 */
/*
let arr = [2,4,6,8, 8]

arr.splice(1,0,3)

console.log(arr)

let lol = [2, 5, 7, 9]

let b=lol.slice(1, 3)

let c = lol.concat(arr);

console.log(c)

let x = arr.indexOf(8)

let z = ['sbk', 'kot']
 */




/* ПРОВЕРКА НА ПАЛИНДРОМ

function palindrome () {
    let x = prompt ("Введите слово");
    let y = x.split("").reverse().join("")
    if (x===y) {
        alert('yes')
    }
    else {
        alert('no')
    }
}

palindrome()

*/
/* МИН МАКС
function min(a,b) {
    if (a<b) {
        return a
    }
    else {
        return b
    }
}

let x = min(13,12);

alert (x);

function max(a,b) {
    if (a>b){
        return a
    }
    else {
        return b
    }
}

let y = max(1,4);

console.log(y);
*/


/* Тернарный оператор
function tern(a,b) {

    let num = (a>b) ? `${a}` : `${b}`;
    console.log(num)
}

tern(3,8)
 */

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = [`${getRandom(1,100)}`,
    `${getRandom(1,100)}`,
    `${getRandom(1,100)}`,
    `${getRandom(1,100)}`,
    `${getRandom(1,100)}`,
    `${getRandom(1,100)}`,
    `${getRandom(1,100)}`,
    `${getRandom(1,100)}`,
    `${getRandom(1,100)}`,
    `${getRandom(1,100)}`];

for (let i=0; i<arr.length; i++){
    arr[i] = arr[i].replace(/0/g,"zero")
}
console.log(arr);





