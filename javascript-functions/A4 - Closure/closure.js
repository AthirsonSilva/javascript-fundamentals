function returnFunction(name){
    return function(){
        return name
    }
}

const fun = returnFunction('Athirson')
const fun2 = returnFunction('Silva')
console.dir(fun)
console.dir(fun2)

console.log(fun(), fun2())