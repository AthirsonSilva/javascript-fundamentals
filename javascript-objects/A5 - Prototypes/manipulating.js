const objMain = () => {
    // new Object -> Object.prototype
    const objA = {
        keyA: 'A'
        // __proto_: Object.prototype
    }

    const objB = {
        keyB: 'B'
        // __proto_: objA
    }

    const objC = new Object()
    objC.keyC = 'C'

    Object.setPrototypeOf(objB, objA)
    Object.setPrototypeOf(objC, objB)

    console.log(Object.getPrototypeOf(objA, objB, objC))
}

function Product(name, price){
    this.name = name,
    this.price = price
}
Product.prototype.discount = function(percentage) {
    this.price = this.price - (this.price * (percentage / 100))
}
Product.prototype.increase = function(percentage) {
    this.price = this.price + (this.price * (percentage / 100))
}
const productTwo = Object.create(Product.prototype, {
    name: {
        value: 'Cellphone',
        writable: true,
        configurable: true,
        enumerable: true
    },
    price: {
        value: 1700,
        writable: true,
        configurable: true,
        enumerable: true
    },
    size: {
        value: '12x6',
        writable: true,
        configurable: true,
        enumerable: true
    },
    color: {
        value: 'black',
        writable: true,
        configurable: true,
        enumerable: true
    }
})
productTwo.increase(10)
console.log(productTwo)
