const fruits = ['Melon', 'Strawberry', 'Blackberry', 'Blueberry']
const person = {
    name: 'Athirson',
    age: 19,
    job: 'Software engineer'
}

for(let i in fruits){
    console.log(`Index: ${i}`)
    console.log(`Values: ${fruits[i]}\n`)
}

console.log('---------------------------\n')

for(let i in person){
    console.log(`Property: ${i}`)
    console.log(`Value: ${person[i]}\n`)
}
