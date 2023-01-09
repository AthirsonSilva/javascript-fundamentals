class Person{
    constructor(name, surname){
        this.name = name,
        this.surname = surname
    }

    get fullName(){
        console.log('Get')
        return this.name + ' ' + this.surname
    }

    set fullName(value){
        value = value.split(' ')
        this.name = value.shift()
        this.surname = value.join(' ')
    }
}

const personOne = new Person('Athirson', 'Silva')
personOne.fullName = 'Athirson Silva'
console.log(personOne.name)
console.log(personOne.surname)
