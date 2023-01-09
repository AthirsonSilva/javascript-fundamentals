// Product = increase, decrease
// Shirt, mug
// Shirt = color, mug = material

function Product(name, price){
    this.name = name,
    this.price = price
}

function Shirt(name, price, color){
    Product.call(this, name, price),
    this.color = color
}

function Smug(name, price, material, stock){
    Product.call(this, name, price),
    this.material = material,
    this.stock = stock

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: function(){
            return stock
        },
        set: function(value){
            if(typeof value !== 'number') return 
            stock = value
        }
    })
}

Product.prototype.increase = function(amount){
    this.price += amount
}
Product.prototype.increase = function(amount){
    this.price -= amount
}


Shirt.prototype = Object.create(Product.prototype)
Shirt.prototype.constructor = Shirt
Shirt.prototype.increase = function(percentage){
    this.price = this.price + (this.price * (percentage / 100))
}
Shirt.prototype.decrease = function(percentage){
    this.price = this.price - (this.price * (percentage / 100))
}


Smug.prototype = Object.create(Product.prototype)
Smug.prototype.constructor = Smug
Smug.prototype.increase = function(percentage){
    this.price = this.price + (this.price * (percentage / 100))
}
Smug.prototype.decrease = function(percentage){
    this.price = this.price - (this.price * (percentage / 100))
}


const prod = new Product('Generic', 1)
const shirt = new Shirt('T-shirt', 30, 'black')
const smug = new Smug('Harry Potter', 20, 'plastic', 5)
console.log(prod)
console.log(shirt)
console.log(smug)