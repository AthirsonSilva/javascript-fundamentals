const person1 = {
    nome: 'Athirson',
    snome: 'Silva',
    idade: 19,
    fala(){
        console.log(`Yamete kudasai, minha idade é ${this.velho()}`)
    },
    velho(){
        this.idade += 1
    }
}

const person2 = {
    nome: 'Glaubão',
    snome: 'Azulão',
    idade: 91
}

function factory(nome, snome, idade){
    return {
        nome, 
        snome,
        idade,
    }
}


person1.fala()