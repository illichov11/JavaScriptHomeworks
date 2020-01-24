const laptop = {
    brand: 'Acer',
    core: 'Intel',
    RAM: '4GB',
    graficsCard: 'AMD'
}

laptop["RAM"] = '6GB'
laptop.core = 'AMD'

console.log(laptop.RAM + ' ' + laptop.core)