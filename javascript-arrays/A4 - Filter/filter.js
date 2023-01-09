function methodOne(){
    const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

    const minusThan10 = numbers.filter((value, index) => {
        console.log(value, index)
        return value > 10
    })
    console.log(minusThan10)
}


const people = [
    {name: 'Athirson', age: 19},
    {name: 'Marya', age: 29},
    {name: 'Edward', age: 17},
    {name: 'Bang', age: 51},
    {name: 'Kiddo', age: 31},
    {name: 'Bomb', age: 56},
]

const longName = people.filter(obj => obj.name.length >= 5)
const aboveFifties = people.filter(obj => obj.age > 50)
const endsWithA = people.filter(obj => obj.name.toLowerCase().endsWith('a'))
console.log(longName)
console.log(aboveFifties)
console.log(endsWithA)
