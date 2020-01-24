let number = Number(prompt('введите число'))

if(number % 2 === 0){
    alert('число четное')
}

if(number % 2 === 1){
    alert('число нечетное')
}

if(isNaN(number)){
    alert('введено не число')
}

