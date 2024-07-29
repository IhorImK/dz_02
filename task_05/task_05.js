'use strict'



// ? Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

let someSecondsToHour = parseFloat(prompt('кількість сек. від початку доби  в години'))
let someSecondsToMin = parseFloat(prompt('кількість сек. від початку доби в хвилини'))

const someSecInAnHour = 3600
let SecInAnHour = someSecondsToHour / someSecInAnHour


const someSecInMin = 60
let SecInAnMin = someSecondsToMin / someSecInMin


console.log(`годин: ${SecInAnHour},  хвилин: ${SecInAnMin} `);