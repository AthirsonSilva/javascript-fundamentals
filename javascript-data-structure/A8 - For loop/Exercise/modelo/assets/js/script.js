const section = document.querySelector('.container')

function setup(){
    const elements = ['p', 'div', 'footer', 'section']
    create(elements)
}

function create(elements){
    for(let i = 0; i < elements.length; i++){
        let temp = document.createElement(elements[i])
        temp = `Phrase ${i + 1}`
        section.innerHTML += '<br>' + temp + '<br>'
    }
}