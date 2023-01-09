class PersonOne{
    constructor(name, surname){
        this.name = name,
        this.surname = surname
    }

    speak(){
        console.log(`${this.name} is speaking with a class...`)
    }
}

function PersonTwo(name, surname){
    this.name = name,
    this.surname = surname
}

PersonTwo.prototype.speak = function(){
    console.log(`${this.name} is speaking with a function...`)
}

const personClass = new PersonOne('Athirson', 'Silva')
const personFunction = new PersonTwo('Athirson', 'Silva')
personClass.speak()
personFunction.speak()