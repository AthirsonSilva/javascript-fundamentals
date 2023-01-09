const form = window.document.querySelector('#form')

form.addEventListener('submit', function(event){
    event.preventDefault()
    const inputWeight = event.target.querySelector('#weight')
    const inputHeight = event.target.querySelector('#height')

    const weight = Number.parseFloat(inputWeight.value)
    const height = Number.parseFloat(inputHeight.value)

    if(!weight){
        setResult('Invalid weight', false)
        return
    }
    if(!height){
        setResult('Invalid height', false)
        return
    } 
    const imc = getIMC(weight, height)
    const level = label(imc)

    const msg = `Your IMC  is ${imc} and your situation ${level}`
    setResult(msg, true)
})

function label(imc){
    const label = ['Too skinny', 'Normal', 'Too fat', 
    'Obesity g1', 'Obesity g2', 'Obesity g1']

    if (imc < 18.5) return label[0]
    if (imc < 25) return label[1]
    if (imc < 30) return label[2]
    if (imc < 35) return label[3]
    if (imc < 40) return label[4]
    if (imc > 40) return label[5]
}

function getIMC(weight, height){
    const imc = weight / (height * height)
    return imc.toFixed(1)
}

function createP(){
    const p = window.document.createElement('p')
    return p
}

function setResult(msg, valid){
    const result = window.document.querySelector('#msg')
    result.innerHTML = ''
    result.style.padding = '15px'

    const p = createP()
    p.innerHTML = msg
    result.appendChild(p)

    if(valid) {
        p.classList.add('good')
    } else {
        p.classList.add('bad')
    }
}