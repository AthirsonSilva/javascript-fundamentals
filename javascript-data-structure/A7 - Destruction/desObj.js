const person = {
    name: 'Athirson',
    surname: 'Silva',
    age: 30,
    address: {
        street: 'Tv. Francisco Bitencourt',
        number: 74
    }
}

const {name: n = 'Nobody', surname: s = 'whoNobodyKnows', age: a = 0} = person
const {address: {street = 'Street', number = 0}} = person
console.log(street, number)
console.log(n, s, a)

const {name, surname, ...rest} = person
console.log(name, rest)