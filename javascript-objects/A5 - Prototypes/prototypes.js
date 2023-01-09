function Person(name, surname){
    this.name = name, 
    this.surname = surname,
    this.fullName = () => `ORIGINAL ${this.name} ${this.surname}`
}

Person.prototype.fullName === p1.__proto__

Person.prototype.fullName = () => `${this.name} ${this.surname}`

const p1 = new Person('Athirson', 'Silva')
const date = new Date()

// date -> Date.prototype -> Object.prototype

console.log(p1)
console.log(date)