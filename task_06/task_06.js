'use strict'



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


let tTotalCost = 
sumFirstProduct + sumSecondProduct + sumThirdProduct

console.log(`загальнa вартість ${tTotalCost}`);