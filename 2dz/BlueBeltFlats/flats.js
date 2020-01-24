const flat = prompt('введите номер квартиры')

const amountOfFlats = 4;
const amountOfFloors = 9;
const flatsInPorch = amountOfFlats * amountOfFloors;
if(flat <= 0){
    alert('иди отсюда, бомж')
}
else{
let porch = Math.ceil(flat / flatsInPorch)

let previousFlats = ((porch -1) * flatsInPorch)
let floor = Math.ceil((flat - previousFlats) / amountOfFlats)

alert(porch + ' подъезд ' + floor + ' этаж')
}