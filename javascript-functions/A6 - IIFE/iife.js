// IIFE -> Immediately invoked function expression
(function(age, weight, height){
    function createName(name, surname){
        const fullName = name + ' ' + surname
        sayHi(fullName)
    }

    function sayHi(name){
        return `Hi, ${name}. It is a pleasure to meet you, and your age is ${age}, your weight is ${weight}, your height is ${height} and your IMC is ${weight / ((height / 100) * (height / 100))}`
    }

    createName('Athirson', 'Silva')
})(19, 63, 185)

