const product = {
    name: 'Cup',
    price: 1.8
}

const cup = Object.assign({}, product, {
    material: 'porcelain'
})


const property = () => {
    Object.defineProperty(product, 'name', {
    writable: false,
    configurable: false,
    value: 'Anything'
    })

    console.log(Object.getOwnPropertyDescriptor(product, 'name'))

}


console.log(Object.keys(product))
console.log(Object.values(product))
for(let [entry, value] of Object.entries(product)){
    console.log(entry, value)
}
