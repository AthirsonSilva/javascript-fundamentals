function Zero() {
    const three = 60 * 60 * 3 * 1000
    const data = new Date(0 + three)
    
    console.log(data.toString())
}

function Exactly() {
    const data = new Date()
    const day = data.getDate()
    const hours = data.getHours()
    const minutes = data.getMinutes()
    const month = data.getMonth()
    const year = data.getFullYear()
    console.log(`Day: ${day},\nhour: ${hours},\nMinutes: ${minutes},\nMonth ${month},\nYear: ${year}`)
}

Exactly()