const check = prompt('для перевода температуры из Цельсия в Фаренгейты введите 1, для перевода Фаренгейтов в Цельсии введите 0')
const degrees = prompt('введите температуру')
let temperature = 0;
if (check === '1'){
    temperature = ((degrees * (9/5)) + 32)
}

if(check === '0'){
    temperature = ((degrees -32) * (5/9))
}

alert(temperature)

