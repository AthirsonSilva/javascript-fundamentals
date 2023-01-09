// Function declaration (Function hoisting)
sayHello()

function sayHello(){
    console.log('\n-------------------------\nOie, linda, ain Kawaii.\n-------------------------\n')
}

// First-class objects (First class objects)
// Function expression
const iamDice = function(){
    console.log('I am a dice.\n')
}

iamDice()

function functionExecute(fun){
    console.log('Executing the function right below...')
    fun()
}
functionExecute(sayHello)

// Arrow function
const arrowFunction = () => {
    console.log('Arrow function executed with success!')
}

arrowFunction()

// Inside object
const obj = {
    speak: function(txt){
        console.log(txt)
    }
}

obj.speak('I am speaking right now...')