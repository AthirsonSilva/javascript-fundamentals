function line(txt){
    console.log('-------------------------------------')
    console.log(txt)
    console.log('-------------------------------------')
}

function Greetings(time){
    if(time > 23 || time < 0){
        console.log('Greetings!!')
    }
    else if(time > 0 && time < 6){
        console.log('Good night')
    }
    else if (time >= 6 && time < 12){
        console.log('Good morning')
    }
    else if(time >= 12 && time < 18){
        console.log('Good afternoon')
    }
    else if(time => 18){
        console.log('Good evening')
    }
}

function Money(value){
    if(value == true){
        console.log('Gonna go')
    }
    else if(value == false){
        console.log('Dont wanna')
    }
}
 
function Numbers(num){
    line('Bigger than zero?')
    if(num >= 0){
        console.log('Answer: Yep')
    } else{
        console.log('Answer: Nah')
    }
    line('Is par?')
    if(num % 2 == 0){
        console.log('Answer: Yep')
    } else{
        console.log('Answer: Nah')
    }
    line('Is cousin?')
    if(num % 2 == 1){
        console.log('Answer: Yep')
    } else{
        console.log('Answer: Nah')
    }
}

Numbers(4)