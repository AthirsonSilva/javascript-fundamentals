const _speed_ = Symbol('speed')
class Car{
    constructor(name, limit){
        this.name = name,
        this[_speed_] = 0
        this.limit = limit
    }

    get speed (){
        console.log('Setter')
        return this[_speed_]
    }

    set speed (value){
        console.log('Getter')
        if(typeof value !== 'number') return
        if(value >= this.limit || value <= 0) return 
        this[_speed_] = value
    }

    speedUp(){
        if(this[_speed_] >= this.limit) return
        this[_speed_]++
    }

    brake(){
        if(this[_speed_] <= 0) return
        this[_speed_]--
    }
}

const carOne = new Car('Fusca', 100)

/* for(let i = 0; i <= this.limit; i++){
    carOne.speedUp()
} */

carOne.speed = 5
console.log(carOne.speed)