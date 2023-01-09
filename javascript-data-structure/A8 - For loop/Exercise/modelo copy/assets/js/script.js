const paragrafos = window.document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(window.document.body)
const backgroundColorBody = estilosBody.backgroundColor

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody
    p.style.color = '#FFFFFF'
    p.style.borderRadius = '5%'
}
