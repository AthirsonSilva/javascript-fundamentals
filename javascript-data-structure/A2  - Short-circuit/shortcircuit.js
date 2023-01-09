function And(){
    console.log('Luiz' && NaN && null && undefined && 'Maria')

    function Oi(){
        return 'Oi'
    }

    const execute = 'Jão'

    console.log(execute && Oi())
}
 

function Or(){
    console.log(0 || false || null || 'Athirson' || true)

    const corUsuario = 'gray'
    const corPadrao = corUsuario || 'black'

    console.log(corPadrao)

    const a = 0
    const b = null
    const c = 'false'
    const d = false
    const e = NaN

    console.log(a || b || c || d || e)
}

Or()