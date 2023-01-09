const speaking = {
    speak(){
        console.log(`${this.name} is talking.`)
    }
}
const drinking = {
    drink(){
        console.log(`${this.name} is drinking.`)
    }
}
const eating = {
    eat(){
        console.log(`${this.name} is eating.`)
    }
}
const naming = {
    name(){
        console.log(`${this.name} ${this.surname}`)
    }
}

const personPrototype = Object.assign({}, speaking, drinking, eating, naming)


function createPerson(name, surname){
    
    return Object.create(personPrototype, {
        name: {
            writable: true,
            configurable: true,
            value: name
        },
        surname: {
            writable: true,
            configurable: true,
            value: name  
        }
    })
}

const p1 = createPerson('Athirson', 'Silva')
p1.speak()
p1.drink()
p1.eat()  