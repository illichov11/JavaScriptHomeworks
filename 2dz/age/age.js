const age = prompt('Введите ваш возраст')
const check = prompt('Был ли уже Ваш день рождения в этом году?(+ или -)')

if (check === "+"){
    alert(`Ваш год рождения: ${2020 - age}`)
}

if (check === "-"){
    alert(`Ваш год рождения: ${2019 - age}`)
}
else alert('Вы ошиблись')