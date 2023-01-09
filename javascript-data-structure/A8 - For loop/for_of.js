const names = ['Athirson', 'Barreto', 'Silva']
const name = 'Athirson'

console.log('\nArray\n')
for(let i of names){
    console.log(i)
}

console.log('\nVariable\n')
for(let i of name){
    console.log(i)
}

console.log('\nForEach\n')
names.forEach(function(value, index, array){
    console.log(value, index, array)
})