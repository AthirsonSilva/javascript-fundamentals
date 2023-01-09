function* generatorOne(){
    yield 'Value 1'
    yield 'Value 2'
    yield 'Value 3'
}

function* generatorTwo(){
    let i = 0
    while(true){
        yield i
        i++
    }
}

function* generatorThree(){
    yield 0
    yield 1
    yield 2
}

function* generatorFour(){
    yield* generatorThree()
    yield 3
    yield 4
    yield 5
}

function* generatorFive(){
    yield function(){
        console.log('I came from yield 1°...')
    }
    yield function(){
        console.log('I came from yield 2°...')
    }
}

const g5 = generatorFive()
const funOne = g5.next().value
const funTwo = g5.next().value
funOne()
funTwo()