const scoreUser = 999

function Ternary(score) {
    return score >= 1000 ? 'VIP' : 'Normal'
}

function Normal(score) {
    if (score >= 1000) {
        return 'VIP'
    } else {
        return 'Normal'
    }
}

function Name(name) {
    return name || 'Nobody'
}

const ternaryWay = Ternary(1239)
const normalWay = Normal(769)
const myName = Name()

console.log(`Ternary: ${ternaryWay}\nNormal: ${normalWay}`)
console.log(myName)