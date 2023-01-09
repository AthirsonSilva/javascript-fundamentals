function Product(name, price, stock){
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        value: stock,
        writable: false,
        configurable: false,
    })
    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: name,
            writable: true,
            configurable: true,
        },
        price: {
            enumerable: true,
            value: price,
            writable: false,
            configurable: false,
        }
    })
}

const p1 = new Product('T-shirt', 12, 3)
console.log(Object.keys(p1))

for(let i in p1){
    console.log(p1[i])
}