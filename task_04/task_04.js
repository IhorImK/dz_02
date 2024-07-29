'use strict'



// ? Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

let lengthInCmToMeter = parseFloat(prompt('довжинa в сантиметраx у метр'))
let lengthInCmToKm = parseFloat(prompt('довжинa в сантиметраx у км'))

let lengthInmMeter = lengthInCmToMeter / 100

let lengthInKm = lengthInCmToKm / 100000

console.log(`сантиметрів ${lengthInmMeter} в метрі`);

console.log(`сантиметрів ${lengthInKm} в кілометрі`);