const person = new Object()
this.name = 'Athirson',
this.surname = 'Silva',
this.age = 19
this.speakName = () => {
    return `${this.name} is speaking your name`
}
this.getBirth = () => {
    const date = new Date()
    return date.getFullYear() - this.age
}
Object.freeze(this)

for(let key in person){
    console.log(person[key])
}

function createPerson(name, surname){
    return{
        name,
        surname,
        get fullName(){
            return `${this.name} ${this.surname}`
        }
    }
}

const p1 = createPerson('Athirson', 'Silva')
console.log(p1.fullName)

function Person(name, surname){
    this.name = name;
    this.surname = surname;
}

const p2 = new Person('Athirson', 'Silva')
console.log(p2)