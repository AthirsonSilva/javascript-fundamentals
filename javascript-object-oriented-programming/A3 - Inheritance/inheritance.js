class Device{
    constructor(name){
        this.name = name
        this.power = false
    }

    turnOn(){
        if(this.power){
            console.log(this.name + ' is already turned on.')
            return
        }  
        console.log('Turning on...')
        this.power = true
    }
    turnOff(){
        if(!this.power){
            console.log(this.name + ' is already turned off.')
            return
        }  
        console.log('Turning off...')
        this.power = false
    }
}

class Smartphone extends Device{
    constructor(name, color, model){
        super(name)
        this.color = color
        this.model = model
    }
}

class Tablet extends Device{
    constructor(name, color, model){
        super(name)
        this.color = color
        this.model = model
    }
}

const s1 = new Smartphone('Asus', 'Black', 'ASUS PocoPhone')
const t1 = new Tablet('iPad', 'White', 'Apple iPad')
console.log(s1)
console.log(t1)
t1.turnOn()
t1.turnOn()