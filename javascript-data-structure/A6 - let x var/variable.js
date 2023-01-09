const vdd = true

let name1 = 'Marcos'
var name2 = 'Teclados'

if (vdd) {
    let name1 = 'var'
    console.log(`${name1} ${name2} = Dos teclados`)
    if (vdd) {
        let name1 = 'let'
        var name2 = 'const'
        console.log(name1, name2)
        name2 = 'dos teclado'
    }
}

console.log(name1, name2)