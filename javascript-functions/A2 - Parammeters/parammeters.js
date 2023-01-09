// Arguments sustains every argument sent
function sumAll(){
    let sum = 0
    for(let i of arguments){
        sum += i
    }
    console.log(sum)
}
sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9)

function funArg(a, b, c, e, d, f){
    console.log(a, b, c, e, d, f)
}
funArg(1, 2, 3)

function sumAB(a = 0, b = 0){
    console.log(a + b)
}
sumAB(2)

function namer(value1, value2, value3){
    console.log(value1, value2, value3)
}
namer(['Athirson', 'Silva', 19])

function operation(operator, accumulator, ...numbers){
    for(let number of numbers){
        if(operator === '+') accumulator += number;
        if(operator === '-') accumulator -= number;
        if(operator === '/') accumulator /= number;
        if(operator === '*') accumulator *= number;
    }
    console.log(accumulator)
}
operation('+', 1, 20, 30, 40, 50)