'use strict'



/**

Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат
вивести у формі таблиці

Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та 
ПДВ (5% від загальної вартості).

Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.


Задача 5. Дано кількість секунд, що пройшла від початку доби.
Визначити скільки це годин і хвилин.

Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів.
Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) 
використовуючи елементи розмітки.

Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера
дня (від 0 до 6).


*/

/**

// ? Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат
// ? вивести у формі таблиці
let numOne = 10
let numSecond = 8

let sumNumbers = 10 + 8
let secondSumNumbers = 10 * 8
let divideSumNumbers = 10 / 8

console.log(sumNumbers);
console.log(secondSumNumbers);
console.log(divideSumNumbers);
*/

 /**
// ? Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

const yearOfBirth = 2001

let currentYear = 2024

let age = currentYear - yearOfBirth

console.log(age);


//? Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну
// ? вартість та ПДВ(5 % від загальної вартості).


let costOfTheUnitProduct = parseFloat(prompt('вартість одиниці товару'))
let numberOfTheUnitProduct = parseFloat(prompt('кількість одиниці товару'))

let tTotalCostOfThePrdc = costOfTheUnitProduct + numberOfTheUnitProduct
console.log(tTotalCostOfThePrdc);

const vatPercentage = 5

let vatValue = tTotalCostOfThePrdc * vatPercentage / 100

console.log(vatValue);



// ? Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

let lengthInCmToMeter = parseFloat(prompt('довжинa в сантиметраx у метр'))
let lengthInCmToKm = parseFloat(prompt('довжинa в сантиметраx у км'))

let lengthInmMeter = lengthInCmToMeter / 100

let lengthInKm = lengthInCmToKm / 100000

console.log(`сантиметрів ${lengthInmMeter} в метрі`);

console.log(`сантиметрів ${lengthInKm} в кілометрі`);



// ? Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

let someSecondsToHour = parseFloat(prompt('кількість сек. від початку доби  в години'))
let someSecondsToMin = parseFloat(prompt('кількість сек. від початку доби в хвилини'))

const someSecInAnHour = 3600
let SecInAnHour = someSecondsToHour / someSecInAnHour


const someSecInMin = 60
let SecInAnMin = someSecondsToMin / someSecInMin


console.log(`годин: ${SecInAnHour},  хвилин: ${SecInAnMin} `);




//? Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів.
//? Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті)
//? використовуючи елементи розмітки.


let tCostOfTheProductFirst = parseFloat(prompt('вартість першого товару за одиницю'))
let productFirst = parseFloat(prompt('кількість першого товару'))

let tCostOfTheProductSecond = parseFloat(prompt('вартість другого товару за одиницю'))
let productSecond = parseFloat(prompt('кiлькість другого товару'))

let tCostOfTheProductThird = parseFloat(prompt('вартість Third товару за одиницю'))
let productThird = parseFloat(prompt('кiлькість Third товару'))


let sumFirstProduct = tCostOfTheProductFirst * productFirst

let sumSecondProduct = tCostOfTheProductSecond * productSecond

let sumThirdProduct = tCostOfTheProductThird * productThird

console.log(` вартість першого товару ${sumFirstProduct}`);

console.log(` вартість другого товару ${sumSecondProduct}`);

console.log(` вартість третього товару ${sumThirdProduct}`);
*/

/**
// ? Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера
// ? дня(від 0 до 6).

let monthNum = Math.random() * 12

let dayNum = Math.random() * 6

let monthNumPlusDayNum = monthNum + dayNum

console.log(monthNumPlusDayNum.toFixed(0));
*/

