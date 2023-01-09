// Return
// Returns a value
// Ends the function
function Sum(a, b){
    return a + b
}

const sum = Sum(1, 7)

console.log(sum)
console.log(Sum(5, 6))

function createPerson(name, surname){
    return {name, surname}
}

const person1 = createPerson('Athirson', 'Silva')
const person2 = createPerson('Agnes', 'Gonçalves')

console.log(person1, person2)

function sayPhrase(start){
    function sayRest(rest){
        return start + ' ' + rest
    }
    return sayRest
}

const speak = sayPhrase('Hi')

const rest = speak('Everyone')
console.log(rest)

function createMulti(multi){
    // Multi
    return function(n){
        return n * multi
    };
}

const double = createMulti(2)
const triple = createMulti(3)

console.log(double, triple)