const lastMonthUsedResourses = prompt('Введите количество использованных энергоресурсов по прошлый месяц')
const thisMonthUsedResourses = prompt('Введмте количество использованных энергоресурсов по этот месяц')
const necessaryAmountOfResourses = thisMonthUsedResourses - lastMonthUsedResourses;
const tariff = prompt ('Введите тариф за потребление энергоресусра')
const amountPayble = necessaryAmountOfResourses * tariff;

    let div = document.createElement('div'); 
       div.innerHTML =`Оплатите ${amountPayble} шекелей в казну пожалуйста`
       div.style.color = "green"
       div.style.fontSize = "50px"
       div.style.textAlign = "center"
       document.body.append(div);