'use strict'



// ? Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера
// ? дня(від 0 до 6).

let monthNum = Math.random() * 12

let dayNum = Math.random() * 6

let monthNumPlusDayNum = monthNum + dayNum

console.log(monthNumPlusDayNum.toFixed(0));