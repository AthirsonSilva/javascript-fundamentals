function FizzBuzz(n){
    if(n === NaN){
        console.log('Not a integer number.')
        return NaN
    }else if(n < 0 || n > 100){
        console.log('Only numbers between 0 and 100 are accepted.')
        return n
    }else if(n % 3 === 0 || n % 5 === 0){
        return 'FizzBuzz'
    }else if(n % 3 === 0){
        return 'Fizz'
    }else if(n % 5 === 0){
        return 'Buzz'
    }else{
        return n
    }
}

const test = FizzBuzz(15)
console.log(test)