const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const people = [
    {name: 'Athirson', age: 19},
    {name: 'Mary', age: 29},
    {name: 'Edward', age: 17},
    {name: 'Bang', age: 51},
    {name: 'Kiddo', age: 31},
    {name: 'Bomb', age: 56},
]

const pairsReduce = numbers.reduce((stack, value) => {
    if(value % 2 === 0) stack.push(value)
    return stack
}, [])
const doubleReduce = numbers.reduce((stack, value) => {
    stack.push(value * 2)
    return stack
}, [])
const sumPairsReduce = numbers.reduce((stack, value) => {
    if(value % 2 === 0) stack += value
    return stack
}, 0)
const oldPeople = people.reduce((stack, value) => {
    if(stack.age > value.age) return stack
    return value
}, 0)

console.log(pairsReduce)
console.log(doubleReduce)
console.log(sumPairsReduce)
console.log(oldPeople)