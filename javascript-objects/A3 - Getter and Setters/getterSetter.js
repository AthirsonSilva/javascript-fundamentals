function Product(name, price, stock){
    this.name = name;
    this.price = price;
    let privateStock = stock;

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        // value: stock,
        // writable: false,
        configurable: false,
        get: () => stock,
        set: value => {
            if(typeof value !== 'number'){
                throw new TypeError('Invalid value type')
            }
            privateStock = value
        }
    })
}

function createProduct(name){
    return{
        get name(){
            return name
        },
        get name(value){
            name = value
        }
    }
}

const p1 = new Product('T-shirt', 12, 3)
p1.stock = 87
console.log(p1.stock)

const p2 = createProduct('Hoodie')
p2.name = 'Anything goes'
console.log(p2.name)