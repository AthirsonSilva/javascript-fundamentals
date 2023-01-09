const elements = [
    {tag: 'h1', text: 'Cool title'},
    {tag: 'p', text: 'Cool paragraph'},
    {tag: 'div', text: 'Cool div'},
    {tag: 'section', text: 'Cool section'},
    {tag: 'footer', text: 'Cool footer'},
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for(let i = 0; i < elements.length; i++){
    let {tag, text} = elements[i]
    let element = document.createElement(tag)
    element.innerHTML = text
    div.appendChild(element)
}

container.appendChild(div)