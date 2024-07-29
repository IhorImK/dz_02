'use strict'



//? Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну
// ? вартість та ПДВ(5 % від загальної вартості).


let costOfTheUnitProduct = parseFloat(prompt('вартість одиниці товару'))
let numberOfTheUnitProduct = parseFloat(prompt('кількість одиниці товару'))

let tTotalCostOfThePrdc = costOfTheUnitProduct + numberOfTheUnitProduct
console.log(tTotalCostOfThePrdc);

const vatPercentage = 5

let vatValue = tTotalCostOfThePrdc * vatPercentage / 100

console.log(vatValue);