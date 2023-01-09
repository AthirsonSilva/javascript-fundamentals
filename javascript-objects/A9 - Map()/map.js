const people = [
    {id: 3, name: 'Athirson'},
    {id: 2, name: 'Barreto'},
    {id: 1, name: 'Silva'},
]
    
// const newPeople = {}
// for(const person of people){
//     const{id} = person
//     newPeople[id] = {...person}
// }
    
const newPeople = new Map()
for(const person of people){
    const{id} = person
    newPeople.set(id, {...person})
}

// for(const [cod, {id, name}] of newPeople.keys()){
//     console.log(cod, id, name)
// }

newPeople.delete(2)
console.log(newPeople)