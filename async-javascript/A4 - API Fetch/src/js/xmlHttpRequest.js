document.addEventListener('click', e=> {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        loadPage(el)
    }
})

async function loadPage(el) {
    try {
        const href = el.getAttribute('href')
        const response = await fetch(href)
    
        if (response.status !== 200) throw new Error('Rato Morto')
    
        const html = await response.text()
        loadResult(html)
    } catch(e) {
        console.error('Rato Morto 2.0')
    }
}

function loadResult(response) {
    const result = document.querySelector('.result')
    result.innerHTML = response
}