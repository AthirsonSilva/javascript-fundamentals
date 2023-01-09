function IMC(){
    let weight = window.document.querySelector('#weight')
    let height = window.document.querySelector('#height')
    const msg = window.document.querySelector('#msg')
    msg.style.color = 'white'
    msg.style.textAlign = 'center'
    
    if(weight.value == '' || height.value == '' || typeof weight.value !== Number || typeof height.value !== Number){
        msg.innerHTML = 'Invalid value, please, try again.'
        msg.style.backgroundColor = 'red'
    } else if (weight > 635){
        window.alert('Wow, you are the fattest person of the world')
    }  else if (height > 2.51){
        window.alert('Wow, you are the tallest person of the world')
    } else {
        let imc = Number.parseFloat(weight.value) / (Number.parseFloat(height.value) * Number.parseFloat( height.value)) 
        let result
        if (imc < 18.5){
            result = 'Too skinny'
            msg.style.backgroundColor = 'red'
        } else if (imc < 25){
            result = 'Normal'
            msg.style.backgroundColor = 'green'
        } else if (imc < 30){
            result = 'Too fat'
            msg.style.backgroundColor = 'orange'
        } else if (imc < 35){
            result = 'Obesity g1'
            msg.style.backgroundColor = 'red'
        } else if (imc < 40){
            result = 'Obesity g2'
            msg.style.backgroundColor = 'darkRed'
        } else {
            result = 'Obesity g3'
            msg.style.backgroundColor = 'black'       
        }
        msg.innerHTML += `Your IMC is: ${Number.parseFloat(imc)} and your result is ${result.toString()}`
    }
}