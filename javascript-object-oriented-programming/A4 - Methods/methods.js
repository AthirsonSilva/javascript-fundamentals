function test(){
    console.log('This is my test')
}

class Control{
    constructor(tv){
        this.tv = tv
        this.volume = 0
        test()
    }

    // Instance method
    increaseVolume(){
        this.volume += 2
    }
    decreaseVolume(){
        this.volume -= 2
    }

    // Static method
    static swapBattery(){
        console.log('Swapping battery...')
    }
}

const c1 = new Control('Samsung smart TV')
console.log(c1)