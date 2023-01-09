const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const people = [
    {name: 'Athirson', age: 19},
    {name: 'Marya', age: 29},
    {name: 'Edward', age: 17},
    {name: 'Bang', age: 51},
    {name: 'Kiddo', age: 31},
    {name: 'Bomb', age: 56},
]

const doubleNumbers = numbers.map(value => value * 2)
const objWithName = people.map(obj => obj.name)
const objWithoutName = people.map(obj => ({age:  obj.age}))
const objID = people.map((obj, index) => {
    const newObj = {...obj}
    newObj.id = (index + 1)
    return newObj
})

console.log(people)
console.log(doubleNumbers)
console.log(objWithName)
console.log(objWithoutName)
console.log(objID)
