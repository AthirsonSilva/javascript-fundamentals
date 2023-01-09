const basics = () => {
    const names = new Array('Edward', 'Mary', 'Joanne')
    const newArray = names
    const spreadArray = [...names]
    names[2] = 'Joan'
    delete names[2]

    for(let i = 0; i < names.length; i++){
        console.log('names: ' + names[i])
        console.log('newArray: ' + newArray[i])
        console.log('spreadArray: ' + spreadArray[i])
    }
}
// basics()

function Slice(names){
    this.names = names,
    this.new = this.names.slice(1, -2),
    console.log(this.new)
}
// const slice = new Slice(['Edward', 'Mary', 'Joanne', 'Wallace', 'Rosanne'])

function stringArray(name){
    return{
        name,
        get names(){
            return name.split(',')
        }
    }
}
const string = stringArray('Athirson, Barreto, da, Silva')
string.names = 'Athirson, Barreto, da, Silva'
console.log(string.names)